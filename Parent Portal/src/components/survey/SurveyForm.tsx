import React, { useState } from 'react';

interface RatingOption {
  value: string;
  label: string;
}

const ratingOptions: RatingOption[] = [
  { value: 'excellent', label: 'Excellent' },
  { value: 'good', label: 'Good' },
  { value: 'average', label: 'Average' },
  { value: 'poor', label: 'Poor' }
];

const criteriaList = [
  'Academic Performance',
  'Classroom Behavior',
  'Homework Completion',
  'Class Participation',
  'Social Interaction',
  'Communication Skills',
  'Overall Progress'
];

const SurveyForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'survey' | 'feedback'>('survey');
  const [ratings, setRatings] = useState<Record<string, string>>({});
  const [comments, setComments] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ratings, comments });
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">Student Performance Survey</h1>
        <p className="text-gray-600 mt-1">Please rate your child's performance in the following areas</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('survey')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'survey'
                  ? 'border-b-2 border-purple-500 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Survey
            </button>
            <button
              onClick={() => setActiveTab('feedback')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'feedback'
                  ? 'border-b-2 border-purple-500 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Feedback History
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {criteriaList.map((criteria) => (
            <div key={criteria} className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">{criteria}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ratingOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={criteria}
                      value={option.value}
                      onChange={(e) =>
                        setRatings({ ...ratings, [criteria]: e.target.value })
                      }
                      className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
              <textarea
                placeholder="Additional comments (optional)"
                value={comments[criteria] || ''}
                onChange={(e) =>
                  setComments({ ...comments, [criteria]: e.target.value })
                }
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                rows={2}
              />
            </div>
          ))}

          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Submit Survey
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SurveyForm;