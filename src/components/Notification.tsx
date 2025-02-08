'use client';

import { useEffect } from 'react';
import { useNotifications } from '@/app/context/NotificationContext';

interface NotificationProps {
  message: string;
  type: 'info' | 'success' | 'error' | 'warning';
  id: number;
  onClose: (id: number) => void;
}

const Notification = ({ message, type, id, onClose }: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 5000); // Auto close after 5 seconds

    return () => clearTimeout(timer); // Clean up on unmount
  }, [id, onClose]);

  return (
    <div
      className={`notification ${type}`}
      style={{
        padding: '10px 20px',
        margin: '10px 0',
        background: type === 'success' ? 'green' : type === 'error' ? 'red' : type === 'warning' ? 'orange' : 'blue',
        color: 'white',
        borderRadius: '5px',
      }}
    >
      {message}
      <button onClick={() => onClose(id)} style={{ marginLeft: '10px' }}>
        X
      </button>
    </div>
  );
};

const NotificationList = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={removeNotification}
        />
      ))}
    </div>
  );
};

export default NotificationList;
