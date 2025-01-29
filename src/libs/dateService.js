// Date range fetching service

const fetchDateRange = async () => {
    try {
        // Simulating API call with sample data
        // Replace this with actual API endpoint when available
        const response = await new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
                    endDate: new Date()
                })
            }, 1000)
        })
        return response
    } catch (error) {
        console.error('Error fetching date range:', error)
        throw error
    }
}

export const dateService = {
    fetchDateRange
}
