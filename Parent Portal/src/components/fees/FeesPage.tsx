import React from 'react';
import { CreditCard, Download, DollarSign, Calendar } from 'lucide-react';

interface FeeItem {
  id: string;
  description: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
}

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  reference: string;
}

const FeesPage: React.FC = () => {
  const feeItems: FeeItem[] = [
    {
      id: '1',
      description: 'Tuition Fee - Term 2',
      amount: 5000,
      dueDate: '2024-03-30',
      status: 'pending'
    },
    {
      id: '2',
      description: 'Laboratory Fee',
      amount: 500,
      dueDate: '2024-03-25',
      status: 'overdue'
    },
    {
      id: '3',
      description: 'Library Fee',
      amount: 200,
      dueDate: '2024-04-15',
      status: 'paid'
    }
  ];

  const transactions: Transaction[] = [
    {
      id: '1',
      description: 'Tuition Fee - Term 1',
      amount: 5000,
      date: '2024-02-15',
      reference: 'TRX-001'
    },
    {
      id: '2',
      description: 'Sports Fee',
      amount: 300,
      date: '2024-02-10',
      reference: 'TRX-002'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">Fees & Dues</h1>
        <p className="text-gray-600 mt-1">Manage your payments and view transaction history</p>
      </div>

      {/* Fee Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Due</p>
              <h3 className="text-2xl font-semibold mt-1">$5,500</h3>
            </div>
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
              <DollarSign className="text-red-500" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Last Payment</p>
              <h3 className="text-2xl font-semibold mt-1">$5,000</h3>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <CreditCard className="text-green-500" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Next Due Date</p>
              <h3 className="text-2xl font-semibold mt-1">Mar 25</h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Calendar className="text-blue-500" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Current Fees */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Current Fees</h2>
          <div className="space-y-4">
            {feeItems.map(fee => (
              <div key={fee.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{fee.description}</h3>
                    <p className="text-sm text-gray-500">
                      Due: {new Date(fee.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-medium text-gray-900">
                      ${fee.amount}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(fee.status)}`}>
                      {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Transaction History</h2>
            <button className="flex items-center text-sm text-purple-600 hover:text-purple-700">
              <Download size={16} className="mr-1" />
              Download Statement
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reference
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {transaction.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${transaction.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {transaction.reference}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesPage;