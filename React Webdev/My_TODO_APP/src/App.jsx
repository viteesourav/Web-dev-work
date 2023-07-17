import { Box } from '@mui/material'
import './App.css'
import ToDoMain from './ToDoMain'
import CssBaseline from '@mui/material/CssBaseline'

function App() {

  return (
    <>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid slategrey',
        borderRadius: '20px',
        mx: 'auto',
        mt: 15,
        textAlign: 'center',
        width: '40%'
      }}>
        <ToDoMain />
      </Box>
    </>
  )
}

export default App
