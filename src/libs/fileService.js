// File listing and management service

const fetchAvailableFiles = async (startDate, endDate) => {
    try {
        // Simulating API call with sample data
        // Replace this with actual API endpoint when available
        const response = await new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {
                        name: 'flight_log_2024_01_15.tlog',
                        url: 'http://localhost:8080/static/media/vtol.d005303.tlog',
                        date: '2024-01-15T10:30:00Z',
                        size: '2.5MB'
                    },
                    {
                        name: 'mission_2024_01_16.bin',
                        url: 'https://example.com/logs/mission_2024_01_16.bin',
                        date: '2024-01-16T14:45:00Z',
                        size: '1.8MB'
                    }
                ])
            }, 1000)
        })
        return response
    } catch (error) {
        console.error('Error fetching available files:', error)
        throw error
    }
}

const downloadFile = async (fileUrl) => {
    try {
        const response = await fetch(fileUrl)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const blob = await response.blob()
        return blob
    } catch (error) {
        console.error('Error downloading file:', error)
        throw error
    }
}

export const fileService = {
    fetchAvailableFiles,
    downloadFile
}
