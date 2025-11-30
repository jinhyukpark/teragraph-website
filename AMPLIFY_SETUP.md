# AWS Amplify 배포 가이드 (TerraGraph)

## 사전 준비사항
- AWS 계정
- GitHub 계정 (코드 저장용)

---

## 1단계: GitHub에 코드 업로드

### GitHub에서 새 저장소 만들기
1. https://github.com/new 접속
2. Repository name: `terragraph-website`
3. Private 또는 Public 선택
4. "Create repository" 클릭

### 코드 푸시 (터미널에서)
```bash
git init
git add .
git commit -m "TerraGraph website - Next.js"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/terragraph-website.git
git push -u origin main
```

---

## 2단계: AWS Amplify 설정

### Amplify 콘솔 접속
1. AWS Console 로그인: https://console.aws.amazon.com
2. 검색창에 "Amplify" 입력 후 선택
3. 리전을 **서울 (ap-northeast-2)** 로 선택

### 새 앱 생성
1. **"Create new app"** 클릭
2. **"Host web app"** 선택
3. Source: **GitHub** 선택
4. GitHub 연결 승인
5. 저장소 선택: `terragraph-website`
6. 브랜치 선택: `main`

### 빌드 설정 확인
Amplify가 자동으로 `amplify.yml` 파일을 감지합니다.
확인 후 **"Next"** 클릭

---

## 3단계: 환경 변수 설정

**"Advanced settings"** 확장 후 다음 환경 변수 추가:

| 변수명 | 값 | 설명 |
|--------|-----|------|
| `DATABASE_URL` | `postgresql://...` | PostgreSQL 연결 문자열 |
| `SMTP_HOST` | `smtp.gmail.com` | 이메일 서버 |
| `SMTP_PORT` | `587` | SMTP 포트 |
| `SMTP_USER` | `your-email@gmail.com` | 이메일 주소 |
| `SMTP_PASS` | `xxxx-xxxx-xxxx-xxxx` | 앱 비밀번호 |

---

## 4단계: 배포

1. **"Save and deploy"** 클릭
2. 배포 진행 (약 3-5분 소요)
3. 상태가 **"Deployed"** 로 변경되면 완료

---

## 5단계: 배포 확인

배포 완료 후:
- Amplify에서 제공하는 URL 확인 (예: `https://main.xxxxx.amplifyapp.com`)
- 웹사이트 접속하여 정상 동작 확인

---

## 6단계: 커스텀 도메인 연결 (선택사항)

### Amplify에서 도메인 추가
1. 왼쪽 메뉴 → **"Domain management"**
2. **"Add domain"** 클릭
3. 도메인 입력: `teragraph.io`
4. DNS 설정 안내에 따라 도메인 레지스트라에서 CNAME 레코드 추가

### DNS 레코드 설정 (도메인 제공업체에서)
```
Type: CNAME
Name: www
Value: (Amplify에서 제공하는 값)

Type: CNAME  
Name: @ (또는 비워둠)
Value: (Amplify에서 제공하는 값)
```

---

## 데이터베이스: AWS RDS PostgreSQL 설정

### RDS 인스턴스 생성
1. AWS Console → RDS → **"Create database"**
2. 설정:
   - Engine: **PostgreSQL**
   - Template: **Free tier** (개발용) 또는 **Production**
   - DB instance identifier: `terragraph-db`
   - Master username: `postgres`
   - Master password: (강력한 비밀번호 설정)
   - Instance: **db.t3.micro** (개발) 또는 **db.t3.small** (프로덕션)
   - Storage: 20GB
   - Public access: **Yes** (Amplify에서 접근용)
3. **"Create database"** 클릭

### 보안 그룹 설정
1. RDS 인스턴스 선택 → **"Connectivity & security"**
2. VPC security groups 클릭
3. **Inbound rules** → **"Edit inbound rules"**
4. 규칙 추가:
   - Type: **PostgreSQL**
   - Port: **5432**
   - Source: **Anywhere (0.0.0.0/0)** - 또는 특정 IP
5. **"Save rules"**

### 연결 문자열 만들기
```
postgresql://postgres:YOUR_PASSWORD@YOUR_RDS_ENDPOINT:5432/postgres
```

예시:
```
postgresql://postgres:MyStr0ngP@ss!@terragraph-db.xxxxx.ap-northeast-2.rds.amazonaws.com:5432/postgres
```

---

## 문제 해결

### 빌드 실패 시
1. Amplify 콘솔 → 빌드 로그 확인
2. 일반적인 원인:
   - Node.js 버전 문제 → `amplify.yml`에 버전 지정
   - 환경 변수 누락 → 변수 재확인

### 데이터베이스 연결 실패 시
1. RDS 보안 그룹에서 5432 포트 열림 확인
2. DATABASE_URL 형식 확인
3. RDS 인스턴스가 "Available" 상태인지 확인

---

## 비용 예상 (월간)

| 서비스 | 비용 |
|--------|------|
| Amplify Hosting | $0 ~ $15 (트래픽에 따라) |
| RDS db.t3.micro | $0 (프리티어) 또는 ~$15 |
| 데이터 전송 | $0 ~ $5 |
| **예상 총액** | **$0 ~ $35/월** |

---

## 다음 단계

1. ✅ GitHub에 코드 푸시
2. ✅ AWS Amplify에서 앱 생성
3. ✅ 환경 변수 설정
4. ✅ 배포 완료
5. ⬜ RDS 데이터베이스 설정
6. ⬜ 커스텀 도메인 연결
7. ⬜ SSL 인증서 (Amplify 자동 제공)
