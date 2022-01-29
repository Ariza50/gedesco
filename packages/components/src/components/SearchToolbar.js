import searchFill from '@iconify/icons-eva/search-fill';
import trash2Fill from '@iconify/icons-eva/trash-2-fill';
import roundFilterList from '@iconify/icons-ic/round-filter-list';
import {Icon} from '@iconify/react';
import {Box, IconButton, InputAdornment, OutlinedInput, Toolbar, Tooltip, Typography} from '@material-ui/core';
import {styled} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0, 1, 0, 3'
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  '&.Mui-focused': { width: 320, boxShadow: `0 8px 16px 0 0` },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

// ----------------------------------------------------------------------

SearchToolbar.propTypes = {
  placeHolder: PropTypes.string,
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func
};

export default function SearchToolbar({ placeHolder, numSelected, filterName, onFilterName }) {

  return (
    <RootStyle
      role="search-toolbar"
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter'
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <SearchStyle
          role="search-input"
          sx={{
            width: '317px'
          }}
          value={filterName}
          onChange={onFilterName}
          placeholder={placeHolder}
          startAdornment={
            <InputAdornment position="start">
              <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          }
        />
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Icon icon={trash2Fill} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Icon icon={roundFilterList} />
          </IconButton>
        </Tooltip>
      )}
    </RootStyle>
  );
}
