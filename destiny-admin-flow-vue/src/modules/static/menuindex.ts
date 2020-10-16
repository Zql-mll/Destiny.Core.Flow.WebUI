import { Guid } from 'guid-typescript';
import { IMenuRouter } from '@/domain/entity/menudto/MenuRouterDto';
import { MenuEnum } from '@/domain/entity/menudto/MenuDto';

export const MenuList: IMenuRouter = 
    {
        id: Guid.EMPTY,
        sort: -1,
        type: MenuEnum.Menu,
        path: "/",
        redirect: "",
        componentName: "",
        component: "",
        icon: "",
        parentId: Guid.EMPTY,
        parentNumber: "",
        name: "根节点",
        children: [
            {
                id: "da92480a-5914-a8bc-110b-aedb0457ce6c",
                sort: -1,
                type: MenuEnum.Menu,
                path: "/system",
                redirect: "",
                componentName: "",
                component: "",
                icon: "",
                parentId: Guid.EMPTY,
                parentNumber: "",
                name: "系统管理",
                children: [
                    {
                        id: Guid.create().toString(),
                        sort: -1,
                        type: MenuEnum.Menu,
                        path: "/system/user",
                        redirect: "",
                        componentName: "",
                        component: "system/user-managerment/user-managerment",
                        icon: "",
                        parentId: "da92480a-5914-a8bc-110b-aedb0457ce6d",
                        parentNumber: "",
                        name: "用户管理",
                        children: [],
                    },
                    {
                        id: Guid.create().toString(),
                        sort: -1,
                        type: MenuEnum.Menu,
                        path: "/system/codegenerator",
                        redirect: "",
                        componentName: "",
                        component: "system/code-generator-managerment/code-generator",
                        icon: "",
                        parentId: "da92480a-5914-a8bc-110b-aedb0457ce6d",
                        parentNumber: "",
                        name: "代码生成器管理",
                        children: [],
                    }
                ],
            }
        ],
    }
