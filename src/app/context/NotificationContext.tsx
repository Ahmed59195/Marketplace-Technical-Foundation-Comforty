'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Notification = {
  id: number;
  message: string;
  type: 'info' | 'success' | 'error' | 'warning';
};

interface NotificationContextProps {
  notifications: Notification[];
  addNotification: (message: string, type?: Notification['type']) => void;
  removeNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const useNotifications = (): NotificationContextProps => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string, type: Notification['type'] = 'info') => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { message, type, id: Date.now() },
    ]);
  };

  const removeNotification = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
