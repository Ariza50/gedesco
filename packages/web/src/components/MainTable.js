import {SearchToolbar} from '@ariz/components/src';
import {Box, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow} from '@material-ui/core';
import {Card} from '@mui/material';
import {filter} from 'lodash';
import PropTypes from 'prop-types';
import {useState} from 'react';
import SortingSelectingHead from './tableComponents/SortingSelectingHead';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_product) => _product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

MainTable.propTypes = {
  listData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
    })
  )
};

export default function MainTable({ listData, columns }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('title');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterName, setFilterName] = useState('');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listData.length) : 0;

  const filteredListData = applySortFilter(listData, getComparator(order, orderBy), filterName);

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: '30px',
    }}>
      <Card sx={{width: 900}}>
        <SearchToolbar placeHolder={'Search Product'} filterName={filterName} onFilterName={handleFilterByName} />
        <TableContainer>
          <Table size={'medium'}>
            <SortingSelectingHead
              order={order}
              orderBy={orderBy}
              headLabel={columns}
              onRequestSort={handleRequestSort}
              rowCount={listData.length}
            />
            <TableBody>
              {filteredListData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.id}
                    >
                      <TableCell align="right">{row.id}</TableCell>
                      <TableCell align="left">{row.title}</TableCell>
                      <TableCell align="left">{row.category}</TableCell>
                      <TableCell align="right">{row.price}€</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{position: 'relative', width: 800}}>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={listData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Box
            sx={{
              px: 3,
              py: 1.5,
              top: 0,
              position: {md: 'absolute'},
            }}
          >
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
