# TerraGraph AWS 배포 가이드

## 옵션 1: AWS Amplify (추천 - 가장 쉬움)

### 1단계: GitHub에 코드 푸시
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/terragraph.git
git push -u origin main
```

### 2단계: AWS Amplify 설정
1. AWS Console → Amplify 접속
2. "New app" → "Host web app" 클릭
3. GitHub 연결 및 저장소 선택
4. Build settings에서 다음 설정:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. 환경 변수 추가:
   - `DATABASE_URL`: PostgreSQL 연결 문자열
   - `SMTP_HOST`: SMTP 서버 호스트
   - `SMTP_PORT`: SMTP 포트
   - `SMTP_USER`: SMTP 사용자
   - `SMTP_PASS`: SMTP 비밀번호

### 3단계: 배포
- "Save and deploy" 클릭
- 배포 완료 후 제공된 URL로 접속

---

## 옵션 2: AWS EC2 + Docker

### 1단계: EC2 인스턴스 생성
1. AWS Console → EC2 → "Launch Instance"
2. Amazon Linux 2023 또는 Ubuntu 22.04 선택
3. 인스턴스 유형: t3.small 이상 권장
4. 보안 그룹 설정:
   - SSH (22): 내 IP
   - HTTP (80): 0.0.0.0/0
   - HTTPS (443): 0.0.0.0/0

### 2단계: EC2에 Docker 설치
```bash
# Amazon Linux 2023
sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ec2-user

# Ubuntu
sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu
```

### 3단계: 코드 배포 및 실행
```bash
# 코드 클론
git clone https://github.com/YOUR_USERNAME/terragraph.git
cd terragraph

# 환경 변수 설정
cat > .env << EOF
DATABASE_URL=postgresql://user:password@host:5432/database
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EOF

# Docker 이미지 빌드 및 실행
docker build -t terragraph .
docker run -d -p 80:3000 --env-file .env --name terragraph terragraph
```

### 4단계: Nginx 리버스 프록시 (SSL 적용)
```bash
sudo yum install -y nginx  # Amazon Linux
# 또는
sudo apt install -y nginx  # Ubuntu

# Nginx 설정
sudo tee /etc/nginx/conf.d/terragraph.conf << EOF
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

sudo systemctl restart nginx
```

### 5단계: SSL 인증서 (Let's Encrypt)
```bash
sudo yum install -y certbot python3-certbot-nginx  # Amazon Linux
# 또는
sudo apt install -y certbot python3-certbot-nginx  # Ubuntu

sudo certbot --nginx -d your-domain.com
```

---

## 옵션 3: AWS App Runner (서버리스 컨테이너)

### 1단계: ECR에 이미지 푸시
```bash
# AWS CLI 설정
aws configure

# ECR 리포지토리 생성
aws ecr create-repository --repository-name terragraph

# 로그인
aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin YOUR_ACCOUNT_ID.dkr.ecr.ap-northeast-2.amazonaws.com

# 이미지 빌드 및 푸시
docker build -t terragraph .
docker tag terragraph:latest YOUR_ACCOUNT_ID.dkr.ecr.ap-northeast-2.amazonaws.com/terragraph:latest
docker push YOUR_ACCOUNT_ID.dkr.ecr.ap-northeast-2.amazonaws.com/terragraph:latest
```

### 2단계: App Runner 서비스 생성
1. AWS Console → App Runner
2. "Create service" 클릭
3. Source: Container registry → Amazon ECR
4. ECR 이미지 선택
5. 환경 변수 추가 (DATABASE_URL, SMTP 설정 등)
6. 포트: 3000
7. "Create & deploy" 클릭

---

## 데이터베이스 설정: AWS RDS PostgreSQL

### RDS 인스턴스 생성
1. AWS Console → RDS → "Create database"
2. PostgreSQL 선택
3. 인스턴스 유형: db.t3.micro (개발) 또는 db.t3.small (프로덕션)
4. 퍼블릭 액세스: "Yes" (개발용) 또는 VPC 내부 (프로덕션)
5. 보안 그룹: PostgreSQL (5432) 포트 열기

### 연결 문자열 형식
```
postgresql://USERNAME:PASSWORD@HOSTNAME:5432/DATABASE_NAME
```

---

## 도메인 연결 (Route 53)

1. Route 53에서 호스팅 영역 생성
2. A 레코드 추가:
   - Amplify: Amplify에서 제공하는 CNAME
   - EC2: EC2의 Elastic IP
   - App Runner: App Runner에서 제공하는 도메인

---

## 환경 변수 체크리스트

| 변수명 | 설명 | 예시 |
|--------|------|------|
| DATABASE_URL | PostgreSQL 연결 문자열 | postgresql://user:pass@host:5432/db |
| SMTP_HOST | SMTP 서버 | smtp.gmail.com |
| SMTP_PORT | SMTP 포트 | 587 |
| SMTP_USER | 이메일 계정 | your-email@gmail.com |
| SMTP_PASS | 앱 비밀번호 | xxxx-xxxx-xxxx-xxxx |

---

## 추천 아키텍처

**소규모/스타트업:**
- AWS Amplify + RDS PostgreSQL

**중규모:**
- EC2 + Docker + RDS + CloudFront

**대규모/엔터프라이즈:**
- ECS Fargate + RDS + ElastiCache + CloudFront + WAF
