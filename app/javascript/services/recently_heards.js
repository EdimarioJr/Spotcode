import Api from "./api"

const RecentlyHeardService = {
    create: (id) => Api.post(`/albums/${id}/recently_heards`),
}

export default RecentlyHeardService;