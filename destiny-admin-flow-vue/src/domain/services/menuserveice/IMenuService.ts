import { IPageRequest } from '@/shared/request';
import { IServerPageReturn } from '@/shared/response';

/**
 * 菜单服务层接口定义
 */
export interface IMenuService{
    getMenuTable(_page:IPageRequest):Promise<IServerPageReturn<any>>;
}