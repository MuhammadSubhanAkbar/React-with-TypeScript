import { useState, useEffect } from 'react'
import axios from 'axios'

interface Props {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const App = () => {
    const [data, setData] = useState<Props[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        setError(null)

        axios.get<Props[]>('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setData(response.data)
                setLoading(false)
            })
            .catch((error) => {
                setError('Failed to fetch data. Please try again later.')
                setLoading(false)
                console.error('Error fetching data:', error)
            })
    }, [])

    if (loading) {
        return <div className="p-4 text-center">Loading...</div>
    }

    if (error) {
        return (
            <div className="p-4 text-red-500 border border-red-300 rounded-lg bg-red-50">
                <h3 className="font-bold">Error: {error}</h3>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Retry
                </button>
            </div>
        )
    }

    return (
        <div className="p-4 space-y-4">
            {data.map((user) => (
                <div
                    key={user.id}
                    className="border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">User Information</h3>

                    <div className="space-y-2 mb-6">
                        <h3><strong className="text-gray-700">ID:</strong> {user.id}</h3>
                        <h3><strong className="text-gray-700">Name:</strong> {user.name}</h3>
                        <h3><strong className="text-gray-700">Username:</strong> {user.username}</h3>
                        <h3><strong className="text-gray-700">Email:</strong> {user.email}</h3>
                        <h3><strong className="text-gray-700">Phone:</strong> {user.phone}</h3>
                        <h3><strong className="text-gray-700">Website:</strong> {user.website}</h3>
                    </div>

                    {/* Address Section with Border */}
                    <div className="border-l-4 border-blue-500 pl-4 mb-6">
                        <h3 className="font-semibold text-gray-800 mb-2">Address:</h3>
                        <ul className="space-y-1">
                            <li><strong>Street:</strong> {user.address.street}</li>
                            <li><strong>Suite:</strong> {user.address.suite}</li>
                            <li><strong>City:</strong> {user.address.city}</li>
                            <li><strong>Zipcode:</strong> {user.address.zipcode}</li>
                            <li><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</li>
                        </ul>
                    </div>

                    {/* Company Section with Border */}
                    <div className="border border-green-200 rounded-md p-4 bg-green-50">
                        <h3 className="font-semibold text-gray-800 mb-2">Company:</h3>
                        <ul className="space-y-1">
                            <li><strong>Name:</strong> {user.company.name}</li>
                            <li><strong>Catchphrase:</strong> {user.company.catchPhrase}</li>
                            <li><strong>Business:</strong> {user.company.bs}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default App