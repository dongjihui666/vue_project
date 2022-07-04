//这个模块主要获取的是品牌管理的模块
//引入axios
import request from '@/utils/request';
//获取品牌列表接口
//admin/product/baseTrdemark/{page}/{limit}
export const reqTredMarkList=(page,limit)=>request({url:`/admin/product/baseTrademark/${page}/${limit}`,method:'get'});
