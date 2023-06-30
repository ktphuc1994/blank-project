import { notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

notification.config({
  bottom: 5,
  duration: 3,
  rtl: false,
  maxCount: 1
});

const showNotify = (
  type: NotificationType,
  message: React.ReactNode,
  placement: NotificationPlacement = 'topRight',
  description?: string
) => {
  notification.error({
    type,
    placement,
    message,
    description
  });
};

export default showNotify;
