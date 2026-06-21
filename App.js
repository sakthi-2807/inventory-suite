import React, { useState } from 'react';
import { 
  Box, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton, 
  ListItem, ListItemButton, ListItemIcon, ListItemText, Grid, Paper, 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Chip
} from '@mui/material';
import { 
  Menu as MenuIcon, Dashboard, Inventory, ReceiptLong, People, Assessment, 
  Settings, Notifications, Add, ArrowUpward, ArrowDownward 
} from '@mui/icons-material';

const drawerWidth = 260;

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard /> },
    { text: 'Inventory Stock', icon: <Inventory /> },
    { text: 'Purchase Orders', icon: <ReceiptLong /> },
    { text: 'Suppliers', icon: <People /> },
    { text: 'Reporting', icon: <Assessment /> },
    { text: 'System Settings', icon: <Settings /> },
  ];

  const stats = [
    { title: 'Total SKU Stock', value: '14,280', change: '+12%', isPositive: true, subtext: 'vs last month' },
    { title: 'Low Stock Alerts', value: '9 Items', change: 'Action Req.', isPositive: false, subtext: 'Requires reorder' },
    { title: 'Pending Orders', value: '24 Shipments', change: '8 In-transit', isPositive: true, subtext: 'Arriving this week' },
  ];

  return (
    <Box sx={{ display: 'flex', bgcolor: '#0b1329', minHeight: '100vh', color: '#ffffff' }}>
      {/* Top Navbar */}
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, bgcolor: '#1c2541', boxShadow: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton color="inherit" edge="start" onClick={() => setMobileOpen(!mobileOpen)} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 600, color: '#4cc9f0' }}>
            Enterprise Inventory Control Suite
          </Typography>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Left Sidebar Navigation */}
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer variant="permanent" sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: '#1c2541', color: '#ffffff', borderRight: '1px solid rgba(255,255,255,0.1)' } }} open>
          <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 32, height: 32, bgcolor: '#4cc9f0', borderRadius: '6px' }} />
            <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>NEXUS LOGISTICS</Typography>
          </Box>
          <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
          <List sx={{ px: 2, py: 3 }}>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                <ListItemButton sx={{ borderRadius: '8px', '&:hover': { bgcolor: 'rgba(76, 201, 240, 0.08)' }, bgcolor: item.text === 'Dashboard' ? 'rgba(76, 201, 240, 0.15)' : 'transparent' }}>
                  <ListItemIcon sx={{ color: item.text === 'Dashboard' ? '#4cc9f0' : '#a5a5a5', minWidth: 40 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '14px', fontWeight: item.text === 'Dashboard' ? 600 : 400, color: item.text === 'Dashboard' ? '#4cc9f0' : '#ffffff' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>

      {/* Main Dashboard Layout Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 4, width: { sm: `calc(100% - ${drawerWidth}px)` }, mt: '64px' }}>
        {/* Metric Summary Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Paper sx={{ p: 3, bgcolor: '#1c2541', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', color: '#ffffff' }}>
                <Typography variant="body2" sx={{ color: '#a5a5a5', mb: 1, fontWeight: 500 }}>{stat.title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 1 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>{stat.value}</Typography>
                  <Chip 
                    size="small" 
                    icon={stat.isPositive ? <ArrowUpward style={{ color: '#4caf50', fontSize: '14px' }} /> : <ArrowDownward style={{ color: '#f44336', fontSize: '14px' }} />}
                    label={stat.change} 
                    sx={{ bgcolor: stat.isPositive ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)', color: stat.isPositive ? '#4caf50' : '#f44336', fontWeight: 600, borderRadius: '4px' }} 
                  />
                </Box>
                <Typography variant="caption" sx={{ color: '#6c757d' }}>{stat.subtext}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Live Inventory Overview Datagrid */}
        <Paper sx={{ p: 3, bgcolor: '#1c2541', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', color: '#ffffff' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Critical Stock Inventory</Typography>
            <Button variant="contained" startIcon={<Add />} sx={{ bgcolor: '#4cc9f0', color: '#0b1329', fontWeight: 600, '&:hover': { bgcolor: '#3a9ec1' }, textTransform: 'none', borderRadius: '8px' }}>
              Add Batch Asset
            </Button>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ '& th': { borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#a5a5a5', fontWeight: 600 } }}>
                  <TableCell>Asset ID</TableCell>
                  <TableCell>Item Classification</TableCell>
                  <TableCell>Storage Zone</TableCell>
                  <TableCell align="right">On-Hand Qty</TableCell>
                  <TableCell align="center">System Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ '& td': { borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#ffffff' } }}>
                {[
                  { id: 'SKU-9082', name: 'Enterprise Server Mainboards', zone: 'Warehouse Delta-4', qty: 142, status: 'In Stock', color: '#4caf50', bg: 'rgba(76, 175, 80, 0.1)' },
                  { id: 'SKU-4412', name: 'Optic Core Fiber Bundles', zone: 'Storage Bay Echo', qty: 8, status: 'Low Stock', color: '#ff9800', bg: 'rgba(255, 152, 0, 0.1)' },
                  { id: 'SKU-3110', name: 'Solid State Enclosures (2TB)', zone: 'Warehouse Delta-4', qty: 1105, status: 'In Stock', color: '#4caf50', bg: 'rgba(76, 175, 80, 0.1)' },
                  { id: 'SKU-7721', name: 'Cryogenic Rack Coolants', zone: 'Hazmat Vault Alpha', qty: 0, status: 'Out of Stock', color: '#f44336', bg: 'rgba(244, 67, 54, 0.1)' }
                ].map((row) => (
                  <TableRow key={row.id} sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.02)' } }}>
                    <TableCell sx={{ fontFamily: 'monospace', color: '#4cc9f0 !important' }}>{row.id}</TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>{row.name}</TableCell>
                    <TableCell>{row.zone}</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>{row.qty.toLocaleString()}</TableCell>
                    <TableCell align="center">
                      <Chip label={row.status} size="small" sx={{ bgcolor: row.bg, color: row.color, fontWeight: 600, borderRadius: '4px' }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
}
