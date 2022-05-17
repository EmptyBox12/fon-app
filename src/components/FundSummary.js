import { Box, Container, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

export default function FundSummary({ data }) {
  return (
    <Container>
      <Stack spacing={2} alignItems="center" component={Paper} elevation={4} sx={{ bgcolor: "#e2e2e2", py: 2, borderRadius: 2 }}>
        <Box>
          <Typography variant='h4' fontSize={27}>
            {data.name}
          </Typography>
          <Typography variant='subtitle1'>
            {data.code}
          </Typography>
        </Box>
        <Stack spacing={2} divider={<Divider />}>
          <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant='subtitle2'>
                Son Fiyat (TL)
              </Typography>
              <Typography variant='body2'>
                0.199
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant='subtitle2'>
                Son Fiyat (TL)
              </Typography>
              <Typography variant='body2'>
                0.199
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant='subtitle2'>
                Son Fiyat (TL)
              </Typography>
              <Typography variant='body2'>
                0.199
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant='subtitle2'>
                Son Fiyat (TL)
              </Typography>
              <Typography variant='body2'>
                0.199
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant='subtitle2'>
                Son Fiyat (TL)
              </Typography>
              <Typography variant='body2'>
                0.199
              </Typography>
            </Box>
          </Stack>
          <Stack alignSelf="center" direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant='subtitle2'>
                Son Fiyat (TL)
              </Typography>
              <Typography variant='body2'>
                0.199
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant='subtitle2'>
                Son Fiyat (TL)
              </Typography>
              <Typography variant='body2'>
                0.199
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant='subtitle2'>
                Son Fiyat (TL)
              </Typography>
              <Typography variant='body2'>
                0.199
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
