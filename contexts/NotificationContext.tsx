"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { useNotifications, Notification } from "@/hooks/use-notifications";

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  permission: NotificationPermission;
  requestPermission: () => Promise<NotificationPermission>;
  addNotification: (
    title: string,
    message: string,
    type?: Notification["type"],
    showBrowserNotification?: boolean
  ) => Notification;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const notificationState = useNotifications();

  return (
    <NotificationContext.Provider value={notificationState}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotificationContext() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotificationContext must be used within a NotificationProvider");
  }
  return context;
}
