import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SidePanel from '../Purchase/Sidepanel';

const Bill = () => {
    const [bill, setBill] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [selectedBill, setSelectedBill] = useState([]);
    const [showCheckboxes, setShowCheckboxes] = useState(false); // State to toggle checkboxes
    const [searchTerm, setSearchTerm] = useState(''); // State for search term
    useEffect(() => {
        fetchBills();
    }, []);

    const fetchBills = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/bill');
            if (response.data) {
                setBill(response.data);
                setDataLoaded(true);
            }
        } catch (error) {
            console.error('Error fetching bill data:', error.response ? error.response.data : error.message);
        }
    };

    const handleCheckboxChange = (billId) => {
        setSelectedBill(prevSelected =>
            prevSelected.includes(billId)
                ? prevSelected.filter(id => id !== billId)
                : [...prevSelected, billId]
        );

    };

    const handleDelete = async () => {
        if (selectedBill.length <= 0) return;

        try {
            await axios.delete('http://localhost:3001/api/bill', { data: { ids: selectedBill } });
            fetchBills();
            setSelectedBill([]);
            setShowCheckboxes(false); // Hide checkboxes after deletion
        } catch (error) {
            console.error('Error deleting bills:', error.response ? error.response.data : error.message);
        }
    };


    const filteredBills = bill.filter(bil =>
        bil.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div className="flex">
            <div className="w-1/5">
                <SidePanel />
            </div>
            <div className="w-4/5 p-6 mt-[4%] mr-[10%]">
                <h1 className="text-xl font-bold mb-4">Bill List</h1>

                <div className="flex justify-between mb-4">
                    {/* Search bar on the left */}
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 border border-gray-600 rounded w-1/3"
                    />

                    {/* Buttons on the right */}
                    <div className="flex space-x-4">
                        <Link
                            to="/dashboard/purchase/bill/form"
                            className="inline-block px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Add Bill
                        </Link>
                        <button
                            onClick={() => {
                                setShowCheckboxes(!showCheckboxes);
                                if (showCheckboxes) {
                                    setSelectedBill([]); // Unselect all checkboxes when 'Cancel' is clicked
                                }
                            }}
                            className={`inline-block px-5 py-2 rounded text-white ${showCheckboxes ? 'bg-gray-500 hover:bg-gray-600' : 'bg-red-500 hover:bg-red-600'}`}
                        >
                            {showCheckboxes ? 'Cancel' : 'Delete Customers'}
                        </button>
                        {showCheckboxes && selectedBill.length > 0 && (
                            <button
                                onClick={handleDelete}
                                className="inline-block px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        )}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4 border-b"></th>
                                <th className="py-2 px-4 border-b">Vendor</th>
                                <th className="py-2 px-4 border-b">Bill Number</th>
                                <th className="py-2 px-4 border-b">Due Date</th>
                                
                                <th className="py-2 px-4 border-b">GST</th>
                                <th className="py-2 px-4 border-b">Grand Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!dataLoaded ? (
                                <tr>
                                    <td colSpan="7" className="py-2 px-4 text-center text-gray-500">
                                        Loading Bills...
                                    </td>
                                </tr>
                            ) : filteredBills.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="py-2 px-4 text-center text-gray-500">
                                        No Bills found
                                    </td>
                                </tr>
                            ) : (
                                filteredBills.map((bill, index) => (
                                    <tr key={bill.sno || index} className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b">
                                            {showCheckboxes && (
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox"
                                                    onChange={() => handleCheckboxChange(bill.sno)}
                                                    checked={selectedBill.includes(bill.sno)}
                                                />
                                            )}
                                        </td>
                                        <td className="py-2 px-4 text-center border-b">
                                            <Link to={`/dashboard/sales/bill/${bill.sno}`} className="text-blue-500 hover:underline">
                                                {bill.name}
                                            </Link>
                                        </td>
                                        <td className="py-2 px-4 text-center border-b">{bill.billnumber}</td>
                                        <td className="py-2 px-4 text-center border-b">{bill.duedate}</td>
                                        
                                        <td className="py-2 px-4 text-center border-b">{bill.gst}</td>
                                        <td className="py-2 px-4 text-center border-b">{bill.total}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Bill
