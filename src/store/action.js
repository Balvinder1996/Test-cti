const Actions = (set) => ({
    handleToken: () => {
        set({ tokenStatus: true})
    },
    handleTokenOut: () => {
        set({ tokenStatus: false})
    },
    handleAdmin: () => {
        set({ adminStatus: true})
    },
    handleAdminOut: () => {
        set({ adminStatus: false})
    }
})

export default Actions