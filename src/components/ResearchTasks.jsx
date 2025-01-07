import React, { useState } from "react";

const ResearchTasks = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("Last Month");
  const [influencerName, setInfluencerName] = useState("");
  const [claimsToAnalyze, setClaimsToAnalyze] = useState(50);
  const [productsToFind, setProductsToFind] = useState(10);
  const [includeRevenueAnalysis, setIncludeRevenueAnalysis] = useState(true);
  const [verifyWithJournals, setVerifyWithJournals] = useState(true);
  const [notes, setNotes] = useState("");
  const [selectedJournals, setSelectedJournals] = useState([
    "PubMed Central",
    "Nature",
    "Science",
    "Cell",
    "The Lancet",
    "New England Journal of Medicine",
    "JAMA Network",
  ]);

  const timeRanges = ["Last Week", "Last Month", "Last Year", "All Time"];

  const toggleJournalSelection = (journal) => {
    setSelectedJournals((prev) =>
      prev.includes(journal)
        ? prev.filter((j) => j !== journal)
        : [...prev, journal]
    );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Research Tasks</h1>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="bg-green-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none">Specific Influencer</button>
          <button className="bg-gray-700 text-white font-medium py-2 px-4 rounded-lg focus:outline-none">Discover New</button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Time Range</label>
          <div className="grid grid-cols-4 gap-2">
            {timeRanges.map((range) => (
              <button
                key={range}
                className={`py-2 px-4 rounded-lg ${
                  selectedTimeRange === range ? "bg-green-600" : "bg-gray-700"
                }`}
                onClick={() => setSelectedTimeRange(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Influencer Name</label>
          <input
            type="text"
            value={influencerName}
            onChange={(e) => setInfluencerName(e.target.value)}
            placeholder="Enter influencer name"
            className="w-full bg-gray-700 py-2 px-4 rounded-lg focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Claims to Analyze Per Influencer</label>
          <input
            type="number"
            value={claimsToAnalyze}
            onChange={(e) => setClaimsToAnalyze(Number(e.target.value))}
            className="w-full bg-gray-700 py-2 px-4 rounded-lg focus:outline-none"
          />
          <p className="text-gray-400 text-sm mt-2">Recommended: 50-100 claims for comprehensive analysis</p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Scientific Journals</label>
          <div className="grid grid-cols-2 gap-2">
            {["PubMed Central", "Nature", "Science", "Cell", "The Lancet", "New England Journal of Medicine", "JAMA Network"].map((journal) => (
              <button
                key={journal}
                className={`py-2 px-4 rounded-lg ${
                  selectedJournals.includes(journal) ? "bg-green-600" : "bg-gray-700"
                }`}
                onClick={() => toggleJournalSelection(journal)}
              >
                {journal}
              </button>
            ))}
            <button className="bg-gray-700 py-2 px-4 rounded-lg">+ Add New Journal</button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Products to Find Per Influencer</label>
          <input
            type="number"
            value={productsToFind}
            onChange={(e) => setProductsToFind(Number(e.target.value))}
            className="w-full bg-gray-700 py-2 px-4 rounded-lg focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="text-sm font-medium">Include Revenue Analysis</label>
          <input
            type="checkbox"
            checked={includeRevenueAnalysis}
            onChange={() => setIncludeRevenueAnalysis(!includeRevenueAnalysis)}
            className="toggle-input"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="text-sm font-medium">Verify with Scientific Journals</label>
          <input
            type="checkbox"
            checked={verifyWithJournals}
            onChange={() => setVerifyWithJournals(!verifyWithJournals)}
            className="toggle-input"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Notes for Research Assistant</label>
          <textarea
            rows="4"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any specific instructions or focus areas..."
            className="w-full bg-gray-700 py-2 px-4 rounded-lg focus:outline-none"
          ></textarea>
        </div>

        <button
          className="w-full bg-green-600 py-2 px-4 rounded-lg text-lg font-medium focus:outline-none"
          onClick={() => {
            console.log({
              selectedTimeRange,
              influencerName,
              claimsToAnalyze,
              productsToFind,
              includeRevenueAnalysis,
              verifyWithJournals,
              selectedJournals,
              notes,
            });
          }}
        >
          Start Research
        </button>
      </div>
    </div>
  );
};

export default ResearchTasks;
