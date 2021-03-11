import React      from 'react'

import { Button } from '@ui/button'
import { Box }    from '@ui/layout'

export const StatusFilter = () => {
  return (
    <Box className='btn-group'>
      <Button type='button' className='btn btn-info'>
        все
      </Button>
      <Button type='button' className='btn btn-outline-secondary'>
        выполненные
      </Button>
    </Box>
  )
}
