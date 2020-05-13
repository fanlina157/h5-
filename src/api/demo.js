import request from '@/utils/request';
// 示例
export function getQueryPC (arg) {
  return request.post('epidemic/radar/getQueryPC', arg);
};
