export const testDateCurrent = () => {
    return {
        "startTime": "2021-12-21T11:00:00Z",
        "values": {
            "temperature": -1.31,
            "weatherCode": 1001
        }
    }
}

export const testDateFourDay = () => {
    return [
        {
            "startTime": "2021-12-21T11:00:00Z",
            "values": {
                "temperature": -1.31,
                "weatherCode": 1001
            }
        },
        {
            "startTime": "2021-12-22T11:00:00Z",
            "values": {
                "temperature": 1.29,
                "weatherCode": 1000
            }
        },
        {
            "startTime": "2021-12-23T11:00:00Z",
            "values": {
                "temperature": -9.51,
                "weatherCode": 1000
            }
        },
        {
            "startTime": "2021-12-24T11:00:00Z",
            "values": {
                "temperature": -8.42,
                "weatherCode": 1001
            }
        },
    ]
}