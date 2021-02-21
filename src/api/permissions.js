import service from '@/utils/request'

// 列表
export function Bloglist(data) {
    return service.request({
        method: "post",
        url: '/api/article/list',
        data
    })
}
// 文章详情
export function Singleblog(id) {
    return service.request({
        method: "get",
        url: `/api/article/${id}`
})
}
