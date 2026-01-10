const { useState } = React;

// Demo data - all campaigns, not just alerts
const generateCvrData = () => [
  {
    id: 1,
    campaign: 'Home Insurance - State Farm',
    publisher: 'InsureLeads Pro',
    avgValue: 4.2,
    todayValue: 2.0,
    changePercent: -52,
  },
  {
    id: 2,
    campaign: 'Medicare Advantage Q1',
    publisher: 'SeniorClickz',
    avgValue: 6.8,
    todayValue: 2.9,
    changePercent: -57,
  },
  {
    id: 3,
    campaign: 'Auto Insurance - Geico',
    publisher: 'DriveDeals Network',
    avgValue: 3.1,
    todayValue: 2.4,
    changePercent: -22,
  },
  {
    id: 4,
    campaign: 'Life Insurance - Prudential',
    publisher: 'LifeLeadGen',
    avgValue: 5.2,
    todayValue: 1.4,
    changePercent: -73,
  },
  {
    id: 5,
    campaign: 'Solar Panel Leads',
    publisher: 'GreenEnergy Clicks',
    avgValue: 2.8,
    todayValue: 2.1,
    changePercent: -25,
  },
  {
    id: 6,
    campaign: 'Home Insurance - State Farm',
    publisher: 'QuoteRunner',
    avgValue: 3.9,
    todayValue: 3.7,
    changePercent: -5,
  },
  {
    id: 7,
    campaign: 'Auto Insurance - Progressive',
    publisher: 'InsureLeads Pro',
    avgValue: 4.1,
    todayValue: 4.3,
    changePercent: 5,
  },
  {
    id: 8,
    campaign: 'Medicare Advantage Q1',
    publisher: 'HealthLeads Direct',
    avgValue: 5.5,
    todayValue: 5.8,
    changePercent: 5,
  },
  {
    id: 9,
    campaign: 'Term Life Insurance',
    publisher: 'LifeLeadGen',
    avgValue: 3.2,
    todayValue: 2.9,
    changePercent: -9,
  },
  {
    id: 10,
    campaign: 'Solar Panel Leads',
    publisher: 'EcoAds Network',
    avgValue: 2.4,
    todayValue: 2.5,
    changePercent: 4,
  },
];

const generateVolumeData = () => [
  {
    id: 1,
    campaign: 'Home Insurance - State Farm',
    publisher: 'InsureLeads Pro',
    avgValue: 245,
    todayValue: 62,
    changePercent: -75,
  },
  {
    id: 2,
    campaign: 'Medicare Advantage Q1',
    publisher: 'SeniorClickz',
    avgValue: 189,
    todayValue: 201,
    changePercent: 6,
  },
  {
    id: 3,
    campaign: 'Auto Insurance - Geico',
    publisher: 'DriveDeals Network',
    avgValue: 412,
    todayValue: 287,
    changePercent: -30,
  },
  {
    id: 4,
    campaign: 'Life Insurance - Prudential',
    publisher: 'LifeLeadGen',
    avgValue: 156,
    todayValue: 41,
    changePercent: -74,
  },
  {
    id: 5,
    campaign: 'Solar Panel Leads',
    publisher: 'GreenEnergy Clicks',
    avgValue: 98,
    todayValue: 103,
    changePercent: 5,
  },
  {
    id: 6,
    campaign: 'Home Insurance - State Farm',
    publisher: 'QuoteRunner',
    avgValue: 178,
    todayValue: 165,
    changePercent: -7,
  },
  {
    id: 7,
    campaign: 'Auto Insurance - Progressive',
    publisher: 'InsureLeads Pro',
    avgValue: 334,
    todayValue: 352,
    changePercent: 5,
  },
  {
    id: 8,
    campaign: 'Medicare Advantage Q1',
    publisher: 'HealthLeads Direct',
    avgValue: 267,
    todayValue: 89,
    changePercent: -67,
  },
  {
    id: 9,
    campaign: 'Term Life Insurance',
    publisher: 'LifeLeadGen',
    avgValue: 145,
    todayValue: 138,
    changePercent: -5,
  },
  {
    id: 10,
    campaign: 'Solar Panel Leads',
    publisher: 'EcoAds Network',
    avgValue: 76,
    todayValue: 81,
    changePercent: 7,
  },
];

const generateCapsData = () => [
  {
    id: 1,
    campaign: 'Home Insurance - State Farm',
    publisher: null,
    capType: 'conversion',
    timeframe: 'daily',
    limit: 500,
    used: 487,
    percentFilled: 97,
    lastClick: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: 2,
    campaign: 'Medicare Advantage Q1',
    publisher: 'SeniorClickz',
    capType: 'conversion',
    timeframe: 'monthly',
    limit: 2500,
    used: 2340,
    percentFilled: 94,
    lastClick: new Date(Date.now() - 1000 * 60 * 12),
  },
  {
    id: 3,
    campaign: 'Auto Insurance - Geico',
    publisher: null,
    capType: 'revenue',
    timeframe: 'daily',
    limit: 5000,
    used: 4250,
    percentFilled: 85,
    lastClick: new Date(Date.now() - 1000 * 60 * 3),
  },
  {
    id: 4,
    campaign: 'Life Insurance - Prudential',
    publisher: 'LifeLeadGen',
    capType: 'conversion',
    timeframe: 'weekly',
    limit: 1000,
    used: 812,
    percentFilled: 81,
    lastClick: new Date(Date.now() - 1000 * 60 * 45),
  },
  {
    id: 5,
    campaign: 'Solar Panel Leads',
    publisher: null,
    capType: 'click',
    timeframe: 'daily',
    limit: 10000,
    used: 6500,
    percentFilled: 65,
    lastClick: new Date(Date.now() - 1000 * 60 * 8),
  },
  {
    id: 6,
    campaign: 'Home Insurance - State Farm',
    publisher: 'QuoteRunner',
    capType: 'payout',
    timeframe: 'monthly',
    limit: 25000,
    used: 15200,
    percentFilled: 61,
    lastClick: new Date(Date.now() - 1000 * 60 * 22),
  },
  {
    id: 7,
    campaign: 'Auto Insurance - Progressive',
    publisher: null,
    capType: 'conversion',
    timeframe: 'global',
    limit: 50000,
    used: 24500,
    percentFilled: 49,
    lastClick: new Date(Date.now() - 1000 * 60 * 2),
  },
  {
    id: 8,
    campaign: 'Medicare Advantage Q1',
    publisher: null,
    capType: 'click',
    timeframe: 'weekly',
    limit: 50000,
    used: 18200,
    percentFilled: 36,
    lastClick: new Date(Date.now() - 1000 * 60 * 15),
  },
  {
    id: 9,
    campaign: 'Term Life Insurance',
    publisher: null,
    capType: 'revenue',
    timeframe: 'monthly',
    limit: 75000,
    used: 22500,
    percentFilled: 30,
    lastClick: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
  },
  {
    id: 10,
    campaign: 'Solar Panel Leads',
    publisher: 'EcoAds Network',
    capType: 'conversion',
    timeframe: 'daily',
    limit: 200,
    used: 45,
    percentFilled: 23,
    lastClick: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10),
  },
  {
    id: 11,
    campaign: 'Home Warranty Leads',
    publisher: null,
    capType: 'conversion',
    timeframe: 'daily',
    limit: 300,
    used: 300,
    percentFilled: 100,
    lastClick: new Date(Date.now() - 1000 * 60 * 30),
  },
];

window.ScrubDetector = function ScrubDetector() {
  const [mode, setMode] = useState('landing');
  const [activeTab, setActiveTab] = useState('scrub'); // 'scrub', 'volume', or 'caps'
  const [cvrData, setCvrData] = useState([]);
  const [volumeData, setVolumeData] = useState([]);
  const [capsData, setCapsData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [window, setWindow] = useState(10);
  const [includeYesterday, setIncludeYesterday] = useState(false);
  const [excludeWeekends, setExcludeWeekends] = useState(true);
  const [sortBy, setSortBy] = useState('todayClicks');
  const [sortAsc, setSortAsc] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [capsFilter, setCapsFilter] = useState({ activity: 'active', capType: 'all', timeframe: 'all' });
  const [settings, setSettings] = useState({
    warningThreshold: 20,
    scrubThreshold: 40,
    volumeWarningThreshold: 25,
    volumeDropThreshold: 50,
  });

  // Get current data based on active tab
  const data = activeTab === 'scrub' ? cvrData : volumeData;

  // Auto-refresh data when baseline settings change
  React.useEffect(() => {
    if (mode === 'live' && !loading) {
      fetchLiveData();
    }
  }, [window, includeYesterday, excludeWeekends]);

  const theme = darkMode ? {
    bg: '#0f172a',
    bgSecondary: '#1e293b',
    bgTertiary: '#334155',
    border: '#334155',
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
  } : {
    bg: '#f8fafc',
    bgSecondary: '#ffffff',
    bgTertiary: '#f1f5f9',
    border: '#e2e8f0',
    text: '#0f172a',
    textSecondary: '#64748b',
    textMuted: '#94a3b8',
  };

  // Helper to get date string
  const getDateStr = (daysAgo) => {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return d.toISOString().split('T')[0];
  };

  // Connect to Everflow via proxy
  const connectEverflow = async () => {
    if (!apiKey.trim()) {
      setError('Please enter your API key');
      return;
    }
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/everflow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: getDateStr(0),
          to: getDateStr(0),
          timezone_id: 67,
          currency_id: 'USD',
          columns: [{ column: 'offer' }],
          query: { filters: [] }
        })
      });

      if (response.ok) {
        setMode('live');
        await fetchLiveData();
      } else {
        const err = await response.json();
        setError(err.error || 'Failed to connect');
      }
    } catch (e) {
      setError('Connection failed: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch live data from Everflow
  const fetchLiveData = async () => {
    setLoading(true);
    try {
      // Fetch baseline data (past X days)
      const baselineRes = await fetch('/api/everflow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: getDateStr(window),
          to: getDateStr(1),
          timezone_id: 67,
          currency_id: 'USD',
          columns: [
            { column: 'offer' },
            { column: 'affiliate' }
          ],
          query: { filters: [] }
        })
      });

      // Fetch today data
      const todayRes = await fetch('/api/everflow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: includeYesterday ? getDateStr(1) : getDateStr(0),
          to: getDateStr(0),
          timezone_id: 67,
          currency_id: 'USD',
          columns: [
            { column: 'offer' },
            { column: 'affiliate' }
          ],
          query: { filters: [] }
        })
      });

      if (baselineRes.ok && todayRes.ok) {
        const baseline = await baselineRes.json();
        const today = await todayRes.json();
        console.log('Baseline response:', baseline);
        console.log('Today response:', today);
        processEverflowData(baseline, today);
      }
    } catch (e) {
      setError('Failed to fetch data: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  // Process Everflow data into our format
  const processEverflowData = (baseline, today) => {
    console.log('Processing data...', { baseline, today });

    // Check if we have table data (grouped by campaign/affiliate)
    if (baseline.table && baseline.table.length > 0) {
      // Process grouped data
      const baselineMap = {};
      const todayMap = {};

      baseline.table.forEach(row => {
        // Use columns[0] for campaign (offer) and columns[2] for publisher (affiliate)
        const key = `${row.columns[0]?.label || 'Unknown'}-${row.columns[2]?.label || 'Unknown'}`;
        const clicks = row.reporting?.total_click || 0;
        const convs = row.reporting?.cv || 0;
        baselineMap[key] = {
          campaign: row.columns[0]?.label || 'Unknown',
          publisher: row.columns[2]?.label || 'Unknown',
          clicks,
          conversions: convs,
          cvr: clicks > 0 ? (convs / clicks) * 100 : 0
        };
      });

      (today.table || []).forEach(row => {
        // Use columns[0] for campaign (offer) and columns[2] for publisher (affiliate)
        const key = `${row.columns[0]?.label || 'Unknown'}-${row.columns[2]?.label || 'Unknown'}`;
        const clicks = row.reporting?.total_click || 0;
        const convs = row.reporting?.cv || 0;
        todayMap[key] = {
          campaign: row.columns[0]?.label || 'Unknown',
          publisher: row.columns[2]?.label || 'Unknown',
          clicks,
          conversions: convs,
          cvr: clicks > 0 ? (convs / clicks) * 100 : 0
        };
      });

      const cvrResults = [];
      const volResults = [];
      let id = 1;

      Object.keys({ ...baselineMap, ...todayMap }).forEach(key => {
        const base = baselineMap[key] || { cvr: 0, clicks: 0, conversions: 0 };
        const now = todayMap[key] || { cvr: 0, clicks: 0, conversions: 0 };

        // Skip campaigns with no clicks today
        if (now.clicks === 0) return;

        const avgCvr = base.cvr / (window - (excludeWeekends ? 2 : 0));
        const cvrChange = avgCvr > 0 ? ((now.cvr - avgCvr) / avgCvr) * 100 : 0;

        const avgVol = base.clicks / (window - (excludeWeekends ? 2 : 0));
        const volChange = avgVol > 0 ? ((now.clicks - avgVol) / avgVol) * 100 : 0;

        // Calculate status priority for sorting (lower = worse)
        const cvrStatus = cvrChange >= 0 ? 3 : Math.abs(cvrChange) >= settings.scrubThreshold ? 0 : Math.abs(cvrChange) >= settings.warningThreshold ? 1 : 2;
        const volStatus = volChange >= 0 ? 3 : Math.abs(volChange) >= settings.volumeDropThreshold ? 0 : Math.abs(volChange) >= settings.volumeWarningThreshold ? 1 : 2;

        cvrResults.push({
          id: id++,
          campaign: base.campaign || now.campaign,
          publisher: base.publisher || now.publisher,
          avgValue: parseFloat(avgCvr.toFixed(2)),
          todayValue: parseFloat(now.cvr.toFixed(2)),
          changePercent: Math.round(cvrChange),
          baselineClicks: base.clicks,
          todayClicks: now.clicks,
          baselineConversions: base.conversions,
          todayConversions: now.conversions,
          status: cvrStatus
        });

        volResults.push({
          id: id++,
          campaign: base.campaign || now.campaign,
          publisher: base.publisher || now.publisher,
          avgValue: Math.round(avgVol),
          todayValue: now.clicks,
          changePercent: Math.round(volChange),
          baselineClicks: base.clicks,
          todayClicks: now.clicks,
          baselineConversions: base.conversions,
          todayConversions: now.conversions,
          status: volStatus
        });
      });

      setCvrData(cvrResults);
      setVolumeData(volResults);
    } else {
      // Fallback: Process aggregate data
      console.log('Using aggregate data fallback');
      const baseClicks = baseline.total_click || 0;
      const baseConvs = baseline.cv || 0;
      const todayClicks = today.total_click || 0;
      const todayConvs = today.cv || 0;

      const baseCvr = baseClicks > 0 ? (baseConvs / baseClicks) * 100 : 0;
      const todayCvr = todayClicks > 0 ? (todayConvs / todayClicks) * 100 : 0;

      const avgCvr = baseCvr / (window - (excludeWeekends ? 2 : 0));
      const cvrChange = avgCvr > 0 ? ((todayCvr - avgCvr) / avgCvr) * 100 : 0;

      const avgVol = baseClicks / (window - (excludeWeekends ? 2 : 0));
      const volChange = avgVol > 0 ? ((todayClicks - avgVol) / avgVol) * 100 : 0;

      setCvrData([{
        id: 1,
        campaign: 'All Campaigns (Aggregate)',
        publisher: 'All Publishers',
        avgValue: parseFloat(avgCvr.toFixed(2)),
        todayValue: parseFloat(todayCvr.toFixed(2)),
        changePercent: Math.round(cvrChange)
      }]);

      setVolumeData([{
        id: 1,
        campaign: 'All Campaigns (Aggregate)',
        publisher: 'All Publishers',
        avgValue: Math.round(avgVol),
        todayValue: todayClicks,
        changePercent: Math.round(volChange)
      }]);
    }
  };

  const getStatus = (changePercent) => {
    const drop = Math.abs(changePercent);
    if (changePercent >= 0) return 'healthy';
    
    if (activeTab === 'scrub') {
      if (drop >= settings.scrubThreshold) return 'scrub';
      if (drop >= settings.warningThreshold) return 'warning';
    } else {
      if (drop >= settings.volumeDropThreshold) return 'scrub';
      if (drop >= settings.volumeWarningThreshold) return 'warning';
    }
    return 'healthy';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'scrub': return { bg: darkMode ? 'rgba(220, 38, 38, 0.15)' : '#fef2f2', text: '#dc2626', border: darkMode ? 'rgba(220, 38, 38, 0.3)' : '#fecaca' };
      case 'warning': return { bg: darkMode ? 'rgba(217, 119, 6, 0.15)' : '#fffbeb', text: '#d97706', border: darkMode ? 'rgba(217, 119, 6, 0.3)' : '#fde68a' };
      default: return { bg: darkMode ? 'rgba(34, 197, 94, 0.1)' : '#f0fdf4', text: '#16a34a', border: darkMode ? 'rgba(34, 197, 94, 0.2)' : '#bbf7d0' };
    }
  };


  const loadDemoData = () => {
    setMode('demo');
    setCvrData(generateCvrData());
    setVolumeData(generateVolumeData());
    setCapsData(generateCapsData());
  };

  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    if (sortAsc) return aVal > bVal ? 1 : -1;
    return aVal < bVal ? 1 : -1;
  });

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortAsc(!sortAsc);
    } else {
      setSortBy(column);
      setSortAsc(column === 'changePercent');
    }
  };

  const scrubCount = data.filter(d => getStatus(d.changePercent) === 'scrub').length;
  const warningCount = data.filter(d => getStatus(d.changePercent) === 'warning').length;
  const healthyCount = data.filter(d => getStatus(d.changePercent) === 'healthy').length;

  // Landing Page
  if (mode === 'landing') {
    return (
      <div style={{
        minHeight: '100vh',
        background: darkMode 
          ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '44px',
            height: '44px',
            background: theme.bgSecondary,
            border: `1px solid ${theme.border}`,
            borderRadius: '12px',
            color: theme.textSecondary,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {darkMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        <div style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <div style={{
            width: '72px',
            height: '72px',
            margin: '0 auto 20px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            borderRadius: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(59, 130, 246, 0.25)',
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          </div>

          <h1 style={{ fontSize: '28px', fontWeight: '700', color: theme.text, marginBottom: '8px' }}>
            Scrub Detector
          </h1>
          <p style={{ color: theme.textSecondary, fontSize: '15px', marginBottom: '36px', lineHeight: '1.5' }}>
            Monitor your Everflow campaigns for CVR drops and volume changes in real-time.
          </p>

          <button
            onClick={loadDemoData}
            style={{
              width: '100%',
              padding: '14px 24px',
              background: '#3b82f6',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '12px',
              boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
            }}
          >
            Try Demo Mode
          </button>
          <p style={{ color: theme.textMuted, fontSize: '13px', marginBottom: '28px' }}>Preview with sample data</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
            <div style={{ flex: 1, height: '1px', background: theme.border }} />
            <span style={{ color: theme.textMuted, fontSize: '12px', fontWeight: '500' }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: theme.border }} />
          </div>

          <div style={{ textAlign: 'left', marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: theme.textSecondary, marginBottom: '8px' }}>
              Everflow API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => { setApiKey(e.target.value); setError(''); }}
              placeholder="Enter your API key"
              style={{
                width: '100%',
                padding: '12px 14px',
                background: theme.bgSecondary,
                border: `1px solid ${error ? '#dc2626' : theme.border}`,
                borderRadius: '10px',
                color: theme.text,
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            {error && <p style={{ color: '#dc2626', fontSize: '12px', marginTop: '8px' }}>{error}</p>}
          </div>

          <button
            onClick={connectEverflow}
            disabled={!apiKey || loading}
            style={{
              width: '100%',
              padding: '14px 24px',
              background: apiKey ? (darkMode ? '#3b82f6' : '#0f172a') : theme.bgTertiary,
              border: 'none',
              borderRadius: '12px',
              color: apiKey ? '#fff' : theme.textMuted,
              fontSize: '15px',
              fontWeight: '600',
              cursor: apiKey && !loading ? 'pointer' : 'not-allowed',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Connecting...' : 'Connect to Everflow'}
          </button>
        </div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div style={{
      minHeight: '100vh',
      background: theme.bg,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: theme.text,
    }}>
      {/* Header */}
      <header style={{
        padding: '12px 20px',
        background: theme.bgSecondary,
        borderBottom: `1px solid ${theme.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Tab: Scrub Detector */}
          <button
            onClick={() => setActiveTab('scrub')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 12px',
              background: activeTab === 'scrub' ? '#3b82f6' : 'transparent',
              border: activeTab === 'scrub' ? 'none' : `1px solid ${theme.border}`,
              borderRadius: '10px',
              color: activeTab === 'scrub' ? '#fff' : theme.textSecondary,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <div style={{
              width: '28px',
              height: '28px',
              background: activeTab === 'scrub' ? 'rgba(255,255,255,0.2)' : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/>
              </svg>
            </div>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>Scrub Detector</span>
          </button>

          {/* Tab: Volume Watcher */}
          <button
            onClick={() => setActiveTab('volume')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 12px',
              background: activeTab === 'volume' ? '#8b5cf6' : 'transparent',
              border: activeTab === 'volume' ? 'none' : `1px solid ${theme.border}`,
              borderRadius: '10px',
              color: activeTab === 'volume' ? '#fff' : theme.textSecondary,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <div style={{
              width: '28px',
              height: '28px',
              background: activeTab === 'volume' ? 'rgba(255,255,255,0.2)' : 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
                <path d="M15 5l2-2 2 2"/>
                <circle cx="19" cy="5" r="1" fill="white"/>
              </svg>
            </div>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>Volume Watcher</span>
          </button>

          {/* Tab: Cap Radar */}
          <button
            onClick={() => setActiveTab('caps')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 12px',
              background: activeTab === 'caps' ? '#10b981' : 'transparent',
              border: activeTab === 'caps' ? 'none' : `1px solid ${theme.border}`,
              borderRadius: '10px',
              color: activeTab === 'caps' ? '#fff' : theme.textSecondary,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <div style={{
              width: '28px',
              height: '28px',
              background: activeTab === 'caps' ? 'rgba(255,255,255,0.2)' : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
                <line x1="12" y1="2" x2="12" y2="4"/>
                <line x1="12" y1="20" x2="12" y2="22"/>
                <line x1="2" y1="12" x2="4" y2="12"/>
                <line x1="20" y1="12" x2="22" y2="12"/>
              </svg>
            </div>
            <span style={{ fontSize: '14px', fontWeight: '600' }}>Cap Radar</span>
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button onClick={() => setDarkMode(!darkMode)} style={{
            width: '38px', height: '38px', background: theme.bgSecondary, border: `1px solid ${theme.border}`,
            borderRadius: '10px', color: theme.textSecondary, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {darkMode ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <button onClick={() => setShowSettings(!showSettings)} style={{
            width: '38px', height: '38px', background: showSettings ? (darkMode ? 'rgba(124, 58, 237, 0.2)' : '#f5f3ff') : theme.bgSecondary,
            border: `1px solid ${showSettings ? (darkMode ? 'rgba(124, 58, 237, 0.4)' : '#ddd6fe') : theme.border}`,
            borderRadius: '10px', color: showSettings ? '#7c3aed' : theme.textSecondary, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </button>
          <button onClick={() => { setMode('landing'); setCvrData([]); setVolumeData([]); setCapsData([]); }} style={{
            width: '38px', height: '38px', background: theme.bgSecondary, border: `1px solid ${theme.border}`,
            borderRadius: '10px', color: theme.textSecondary, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Settings Panel */}
      {showSettings && (activeTab === 'scrub' || activeTab === 'volume') && (
        <div style={{ padding: '16px 20px', background: theme.bgSecondary, borderBottom: `1px solid ${theme.border}` }}>
          <h3 style={{ fontSize: '13px', color: activeTab === 'scrub' ? '#3b82f6' : '#8b5cf6', marginBottom: '12px', fontWeight: '600' }}>
            {activeTab === 'scrub' ? 'CVR Thresholds' : 'Volume Thresholds'}
          </h3>
          <div style={{ display: 'flex', gap: '12px' }}>
            {activeTab === 'scrub' ? (
              <>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '11px', color: theme.textSecondary, display: 'block', marginBottom: '6px' }}>Warning %</label>
                  <input type="number" value={settings.warningThreshold} onChange={(e) => setSettings({ ...settings, warningThreshold: parseInt(e.target.value) })}
                    style={{ width: '100%', padding: '10px', background: theme.bgTertiary, border: `1px solid ${theme.border}`, borderRadius: '8px', color: '#d97706', fontSize: '14px', fontWeight: '600', boxSizing: 'border-box' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '11px', color: theme.textSecondary, display: 'block', marginBottom: '6px' }}>Scrub Likely %</label>
                  <input type="number" value={settings.scrubThreshold} onChange={(e) => setSettings({ ...settings, scrubThreshold: parseInt(e.target.value) })}
                    style={{ width: '100%', padding: '10px', background: theme.bgTertiary, border: `1px solid ${theme.border}`, borderRadius: '8px', color: '#dc2626', fontSize: '14px', fontWeight: '600', boxSizing: 'border-box' }}
                  />
                </div>
              </>
            ) : (
              <>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '11px', color: theme.textSecondary, display: 'block', marginBottom: '6px' }}>Warning %</label>
                  <input type="number" value={settings.volumeWarningThreshold} onChange={(e) => setSettings({ ...settings, volumeWarningThreshold: parseInt(e.target.value) })}
                    style={{ width: '100%', padding: '10px', background: theme.bgTertiary, border: `1px solid ${theme.border}`, borderRadius: '8px', color: '#d97706', fontSize: '14px', fontWeight: '600', boxSizing: 'border-box' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ fontSize: '11px', color: theme.textSecondary, display: 'block', marginBottom: '6px' }}>Major Drop %</label>
                  <input type="number" value={settings.volumeDropThreshold} onChange={(e) => setSettings({ ...settings, volumeDropThreshold: parseInt(e.target.value) })}
                    style={{ width: '100%', padding: '10px', background: theme.bgTertiary, border: `1px solid ${theme.border}`, borderRadius: '8px', color: '#dc2626', fontSize: '14px', fontWeight: '600', boxSizing: 'border-box' }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Scrub Detector & Volume Watcher Content */}
      {(activeTab === 'scrub' || activeTab === 'volume') && (
        <>
      {/* Summary Cards */}
      <div style={{ padding: '20px', display: 'flex', gap: '12px', background: theme.bg }}>
        <div style={{ flex: 1, padding: '16px 20px', background: theme.bgSecondary, border: `2px solid ${scrubCount > 0 ? '#dc2626' : theme.border}`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '11px', color: theme.textSecondary, fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' }}>{activeTab === 'scrub' ? 'Scrub Likely' : 'Major Drop'}</div>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#dc2626' }}>{scrubCount}</div>
          </div>
          <div style={{ width: '48px', height: '48px', background: 'rgba(220,38,38,0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '24px' }}>🚨</span>
          </div>
        </div>
        <div style={{ flex: 1, padding: '16px 20px', background: theme.bgSecondary, border: `2px solid ${warningCount > 0 ? '#d97706' : theme.border}`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '11px', color: theme.textSecondary, fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' }}>Warning</div>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#d97706' }}>{warningCount}</div>
          </div>
          <div style={{ width: '48px', height: '48px', background: 'rgba(217,119,6,0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '24px' }}>⚠️</span>
          </div>
        </div>
        <div style={{ flex: 1, padding: '16px 20px', background: theme.bgSecondary, border: `2px solid ${theme.border}`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '11px', color: theme.textSecondary, fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' }}>Healthy</div>
            <div style={{ fontSize: '28px', fontWeight: '700', color: '#16a34a' }}>{healthyCount}</div>
          </div>
          <div style={{ width: '48px', height: '48px', background: 'rgba(34,197,94,0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '24px' }}>✅</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ padding: '20px', background: theme.bg }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px', background: theme.bgSecondary, padding: '16px', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
            <label style={{ fontSize: '11px', fontWeight: '600', color: theme.textSecondary, display: 'block', marginBottom: '10px', textTransform: 'uppercase' }}>
              Baseline Period
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[5, 10, 30].map((days) => (
                <button key={days} onClick={() => setWindow(days)} style={{
                  flex: 1, padding: '10px', background: window === days ? '#3b82f6' : 'transparent',
                  border: `2px solid ${window === days ? '#3b82f6' : theme.border}`, borderRadius: '8px',
                  color: window === days ? '#fff' : theme.text, fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  {days} Days
                </button>
              ))}
            </div>
          </div>

          <div style={{ flex: '1 1 300px', background: theme.bgSecondary, padding: '16px', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
            <label style={{ fontSize: '11px', fontWeight: '600', color: theme.textSecondary, display: 'block', marginBottom: '10px', textTransform: 'uppercase' }}>
              Current Period
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => setIncludeYesterday(false)} style={{
                flex: 1, padding: '10px', background: !includeYesterday ? '#3b82f6' : 'transparent',
                border: `2px solid ${!includeYesterday ? '#3b82f6' : theme.border}`, borderRadius: '8px',
                color: !includeYesterday ? '#fff' : theme.text, fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                transition: 'all 0.2s',
              }}>Today Only</button>
              <button onClick={() => setIncludeYesterday(true)} style={{
                flex: 1, padding: '10px', background: includeYesterday ? '#3b82f6' : 'transparent',
                border: `2px solid ${includeYesterday ? '#3b82f6' : theme.border}`, borderRadius: '8px',
                color: includeYesterday ? '#fff' : theme.text, fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                transition: 'all 0.2s',
              }}>Last 2 Days</button>
            </div>
          </div>

          <div style={{ flex: '0 1 auto', background: theme.bgSecondary, padding: '16px', borderRadius: '12px', border: `1px solid ${theme.border}` }}>
            <label style={{ fontSize: '11px', fontWeight: '600', color: theme.textSecondary, display: 'block', marginBottom: '10px', textTransform: 'uppercase' }}>
              Include Weekends
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => setExcludeWeekends(false)} style={{
                padding: '10px 16px', background: !excludeWeekends ? '#16a34a' : 'transparent',
                border: `2px solid ${!excludeWeekends ? '#16a34a' : theme.border}`, borderRadius: '8px',
                color: !excludeWeekends ? '#fff' : theme.text, fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                transition: 'all 0.2s',
              }}>Yes</button>
              <button onClick={() => setExcludeWeekends(true)} style={{
                padding: '10px 16px', background: excludeWeekends ? '#ef4444' : 'transparent',
                border: `2px solid ${excludeWeekends ? '#ef4444' : theme.border}`, borderRadius: '8px',
                color: excludeWeekends ? '#fff' : theme.text, fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                transition: 'all 0.2s',
              }}>No</button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div style={{ padding: '16px 20px 12px', background: theme.bg }}>
        <div style={{ display: 'flex', gap: '12px', padding: '12px 16px', background: theme.bgSecondary, borderRadius: '10px 10px 0 0', border: `1px solid ${theme.border}`, borderBottom: 'none' }}>
          <div style={{ flex: 2.5, fontSize: '10px', fontWeight: '700', color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Campaign / Publisher</div>
          <div onClick={() => handleSort('status')} style={{ flex: 0.8, fontSize: '10px', fontWeight: '700', color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            Status {sortBy === 'status' && <span style={{ fontSize: '12px' }}>{sortAsc ? '↑' : '↓'}</span>}
          </div>
          <div onClick={() => handleSort('todayClicks')} style={{ flex: 0.8, fontSize: '10px', fontWeight: '700', color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer', textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
            Clicks (Today) {sortBy === 'todayClicks' && <span style={{ fontSize: '12px' }}>{sortAsc ? '↑' : '↓'}</span>}
          </div>
          <div onClick={() => handleSort('todayConversions')} style={{ flex: 0.8, fontSize: '10px', fontWeight: '700', color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer', textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
            Conversions {sortBy === 'todayConversions' && <span style={{ fontSize: '12px' }}>{sortAsc ? '↑' : '↓'}</span>}
          </div>
          <div onClick={() => handleSort('todayValue')} style={{ flex: 0.8, fontSize: '10px', fontWeight: '700', color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer', textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
            CVR (Today) {sortBy === 'todayValue' && <span style={{ fontSize: '12px' }}>{sortAsc ? '↑' : '↓'}</span>}
          </div>
          <div onClick={() => handleSort('changePercent')} style={{ flex: 0.8, fontSize: '10px', fontWeight: '700', color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer', textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
            Change {sortBy === 'changePercent' && <span style={{ fontSize: '12px' }}>{sortAsc ? '↑' : '↓'}</span>}
          </div>
        </div>
      </div>

      {/* Table Rows */}
      <div style={{ padding: '0 20px 20px', background: theme.bg }}>
        {sortedData.map((row, idx) => {
          const status = getStatus(row.changePercent);
          const colors = getStatusColor(status);
          const statusConfig = {
            scrub: { label: '🚨 Alert', color: '#dc2626' },
            warning: { label: '⚠️ Watch', color: '#d97706' },
            healthy: { label: '✅ Good', color: '#16a34a' }
          };
          return (
            <div key={row.id} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px',
              background: theme.bgSecondary,
              border: `1px solid ${theme.border}`,
              borderTop: idx === 0 ? `1px solid ${theme.border}` : 'none',
              borderRadius: idx === 0 ? '0' : '0',
              transition: 'all 0.2s',
            }}>
              <div style={{ flex: 2.5 }}>
                <div style={{ fontSize: '14px', fontWeight: '600', color: theme.text, marginBottom: '4px' }}>{row.campaign}</div>
                <div style={{ fontSize: '12px', color: theme.textSecondary }}>{row.publisher}</div>
              </div>
              <div style={{ flex: 0.8, textAlign: 'center' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: '700',
                  color: statusConfig[status].color,
                  background: `${statusConfig[status].color}15`,
                  padding: '6px 10px',
                  borderRadius: '6px',
                  border: `1px solid ${statusConfig[status].color}40`,
                }}>
                  {statusConfig[status].label}
                </span>
              </div>
              <div style={{ flex: 0.8, textAlign: 'right', fontSize: '14px', fontWeight: '600', color: theme.text }}>
                {row.todayClicks?.toLocaleString() || 0}
              </div>
              <div style={{ flex: 0.8, textAlign: 'right', fontSize: '14px', fontWeight: '600', color: theme.text }}>
                {row.todayConversions?.toLocaleString() || 0}
              </div>
              <div style={{ flex: 0.8, textAlign: 'right', fontSize: '14px', fontWeight: '600', color: theme.text }}>
                {activeTab === 'scrub' ? `${row.todayValue}%` : row.todayValue.toLocaleString()}
              </div>
              <div style={{ flex: 0.8, textAlign: 'right' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  background: row.changePercent >= 0 ? 'rgba(34,197,94,0.15)' : 'rgba(220,38,38,0.15)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: row.changePercent >= 0 ? '#16a34a' : '#dc2626',
                  border: `1px solid ${row.changePercent >= 0 ? 'rgba(34,197,94,0.3)' : 'rgba(220,38,38,0.3)'}`,
                }}>
                  {row.changePercent > 0 ? '+' : ''}{row.changePercent}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
        </>
      )}

      {/* Cap Radar Content */}
      {activeTab === 'caps' && (
        <>
          {/* Cap Summary Cards */}
          <div style={{ padding: '16px 20px', display: 'flex', gap: '10px', background: theme.bgSecondary, borderBottom: `1px solid ${theme.border}` }}>
            <div style={{ flex: 1, padding: '12px', background: capsData.filter(c => c.percentFilled >= 100).length > 0 ? (darkMode ? 'rgba(220,38,38,0.15)' : '#fef2f2') : theme.bgTertiary, border: `1px solid ${capsData.filter(c => c.percentFilled >= 100).length > 0 ? (darkMode ? 'rgba(220,38,38,0.3)' : '#fecaca') : theme.border}`, borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: '700', color: '#dc2626' }}>{capsData.filter(c => c.percentFilled >= 100).length}</div>
              <div style={{ fontSize: '10px', color: theme.textSecondary, fontWeight: '500' }}>Hit</div>
            </div>
            <div style={{ flex: 1, padding: '12px', background: capsData.filter(c => c.percentFilled >= 80 && c.percentFilled < 100).length > 0 ? (darkMode ? 'rgba(220,38,38,0.15)' : '#fef2f2') : theme.bgTertiary, border: `1px solid ${capsData.filter(c => c.percentFilled >= 80 && c.percentFilled < 100).length > 0 ? (darkMode ? 'rgba(220,38,38,0.3)' : '#fecaca') : theme.border}`, borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: '700', color: '#f97316' }}>{capsData.filter(c => c.percentFilled >= 80 && c.percentFilled < 100).length}</div>
              <div style={{ fontSize: '10px', color: theme.textSecondary, fontWeight: '500' }}>Critical</div>
            </div>
            <div style={{ flex: 1, padding: '12px', background: capsData.filter(c => c.percentFilled >= 60 && c.percentFilled < 80).length > 0 ? (darkMode ? 'rgba(217,119,6,0.15)' : '#fffbeb') : theme.bgTertiary, border: `1px solid ${capsData.filter(c => c.percentFilled >= 60 && c.percentFilled < 80).length > 0 ? (darkMode ? 'rgba(217,119,6,0.3)' : '#fde68a') : theme.border}`, borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: '700', color: '#d97706' }}>{capsData.filter(c => c.percentFilled >= 60 && c.percentFilled < 80).length}</div>
              <div style={{ fontSize: '10px', color: theme.textSecondary, fontWeight: '500' }}>Close</div>
            </div>
            <div style={{ flex: 1, padding: '12px', background: theme.bgTertiary, border: `1px solid ${theme.border}`, borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: '700', color: '#16a34a' }}>{capsData.filter(c => c.percentFilled < 60).length}</div>
              <div style={{ fontSize: '10px', color: theme.textSecondary, fontWeight: '500' }}>OK</div>
            </div>
          </div>

          {/* Cap Filters */}
          <div style={{ padding: '16px 20px', background: theme.bgSecondary, borderBottom: `1px solid ${theme.border}` }}>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ fontSize: '12px', fontWeight: '600', color: theme.textSecondary, display: 'block', marginBottom: '8px' }}>
                Activity
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['active', 'all'].map((opt) => (
                  <button key={opt} onClick={() => setCapsFilter({ ...capsFilter, activity: opt })} style={{
                    flex: 1, padding: '10px', background: capsFilter.activity === opt ? '#10b981' : theme.bgTertiary,
                    border: `1px solid ${capsFilter.activity === opt ? '#10b981' : theme.border}`, borderRadius: '10px',
                    color: capsFilter.activity === opt ? '#fff' : theme.textSecondary, fontSize: '13px', fontWeight: '600', cursor: 'pointer', textTransform: 'capitalize',
                  }}>
                    {opt === 'active' ? 'Active (7d)' : 'All'}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <label style={{ fontSize: '12px', fontWeight: '600', color: theme.textSecondary, display: 'block', marginBottom: '8px' }}>
                Cap Type
              </label>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['all', 'conversion', 'click', 'revenue', 'payout'].map((opt) => (
                  <button key={opt} onClick={() => setCapsFilter({ ...capsFilter, capType: opt })} style={{
                    padding: '8px 12px', background: capsFilter.capType === opt ? '#10b981' : theme.bgTertiary,
                    border: `1px solid ${capsFilter.capType === opt ? '#10b981' : theme.border}`, borderRadius: '8px',
                    color: capsFilter.capType === opt ? '#fff' : theme.textSecondary, fontSize: '12px', fontWeight: '500', cursor: 'pointer', textTransform: 'capitalize',
                  }}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ fontSize: '12px', fontWeight: '600', color: theme.textSecondary, display: 'block', marginBottom: '8px' }}>
                Timeframe
              </label>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {['all', 'daily', 'weekly', 'monthly', 'global'].map((opt) => (
                  <button key={opt} onClick={() => setCapsFilter({ ...capsFilter, timeframe: opt })} style={{
                    padding: '8px 12px', background: capsFilter.timeframe === opt ? '#10b981' : theme.bgTertiary,
                    border: `1px solid ${capsFilter.timeframe === opt ? '#10b981' : theme.border}`, borderRadius: '8px',
                    color: capsFilter.timeframe === opt ? '#fff' : theme.textSecondary, fontSize: '12px', fontWeight: '500', cursor: 'pointer', textTransform: 'capitalize',
                  }}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cap Table Header */}
          <div style={{ padding: '12px 20px', background: theme.bgTertiary, borderBottom: `1px solid ${theme.border}`, display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ flex: 2, fontSize: '11px', fontWeight: '600', color: theme.textSecondary, textTransform: 'uppercase' }}>Campaign / Publisher</div>
            <div style={{ flex: 1, fontSize: '11px', fontWeight: '600', color: theme.textSecondary, textTransform: 'uppercase', textAlign: 'center' }}>Type</div>
            <div style={{ flex: 1, fontSize: '11px', fontWeight: '600', color: theme.textSecondary, textTransform: 'uppercase', textAlign: 'right' }}>Used / Limit</div>
            <div style={{ flex: 1.5, fontSize: '11px', fontWeight: '600', color: theme.textSecondary, textTransform: 'uppercase', textAlign: 'center' }}>Progress</div>
          </div>

          {/* Cap Table Rows */}
          <div style={{ padding: '0 20px 20px' }}>
            {capsData
              .filter(cap => {
                if (capsFilter.activity === 'active') {
                  const daysSinceClick = (Date.now() - cap.lastClick.getTime()) / (1000 * 60 * 60 * 24);
                  if (daysSinceClick > 7) return false;
                }
                if (capsFilter.capType !== 'all' && cap.capType !== capsFilter.capType) return false;
                if (capsFilter.timeframe !== 'all' && cap.timeframe !== capsFilter.timeframe) return false;
                return true;
              })
              .sort((a, b) => b.percentFilled - a.percentFilled)
              .map((cap) => {
                const getCapStatus = (pct) => {
                  if (pct >= 100) return { label: 'HIT', color: '#dc2626', bg: darkMode ? 'rgba(220,38,38,0.15)' : '#fef2f2' };
                  if (pct >= 80) return { label: 'CRITICAL', color: '#f97316', bg: darkMode ? 'rgba(249,115,22,0.15)' : '#fff7ed' };
                  if (pct >= 60) return { label: 'CLOSE', color: '#d97706', bg: darkMode ? 'rgba(217,119,6,0.15)' : '#fffbeb' };
                  return { label: 'OK', color: '#16a34a', bg: darkMode ? 'rgba(34,197,94,0.1)' : '#f0fdf4' };
                };
                const status = getCapStatus(cap.percentFilled);
                const capTypeIcon = {
                  conversion: '🔄',
                  click: '👆',
                  revenue: '💰',
                  payout: '💵',
                };
                const timeframeLabel = {
                  daily: 'D',
                  weekly: 'W',
                  monthly: 'M',
                  global: 'G',
                };

                return (
                  <div key={cap.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 16px',
                    background: status.bg,
                    borderLeft: `4px solid ${status.color}`,
                    borderRadius: '10px',
                    marginTop: '8px',
                  }}>
                    <div style={{ flex: 2 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: theme.text }}>{cap.campaign}</span>
                        {cap.percentFilled >= 80 && (
                          <span style={{
                            fontSize: '9px', fontWeight: '700', color: status.color,
                            background: darkMode ? `${status.color}33` : `${status.color}22`,
                            padding: '2px 6px', borderRadius: '4px',
                          }}>{status.label}</span>
                        )}
                      </div>
                      <div style={{ fontSize: '12px', color: theme.textSecondary }}>{cap.publisher || 'Offer Level'}</div>
                    </div>
                    <div style={{ flex: 1, textAlign: 'center' }}>
                      <span style={{ fontSize: '12px', color: theme.textSecondary }}>
                        {capTypeIcon[cap.capType]} {cap.capType.charAt(0).toUpperCase() + cap.capType.slice(1)}
                      </span>
                      <div style={{ fontSize: '10px', color: theme.textMuted, marginTop: '2px' }}>
                        {timeframeLabel[cap.timeframe]} - {cap.timeframe}
                      </div>
                    </div>
                    <div style={{ flex: 1, textAlign: 'right', fontSize: '13px', color: theme.text }}>
                      <span style={{ fontWeight: '600' }}>{cap.capType === 'revenue' || cap.capType === 'payout' ? `$${cap.used.toLocaleString()}` : cap.used.toLocaleString()}</span>
                      <span style={{ color: theme.textMuted }}> / {cap.capType === 'revenue' || cap.capType === 'payout' ? `$${cap.limit.toLocaleString()}` : cap.limit.toLocaleString()}</span>
                    </div>
                    <div style={{ flex: 1.5 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ flex: 1, height: '8px', background: theme.bgTertiary, borderRadius: '4px', overflow: 'hidden' }}>
                          <div style={{
                            width: `${Math.min(cap.percentFilled, 100)}%`,
                            height: '100%',
                            background: status.color,
                            borderRadius: '4px',
                            transition: 'width 0.3s ease',
                          }} />
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: '700', color: status.color, minWidth: '45px', textAlign: 'right' }}>
                          {cap.percentFilled}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}
