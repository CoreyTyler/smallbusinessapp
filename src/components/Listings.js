import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from "@material-ui/icons/Delete";
import AddFooter from "./AddFooter"
import LogoutButton from "./LogoutButton"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, description, hours, address, del) {
  return { name, description, hours, address, del };
}

const rows = [
  createData('4th Tap Brewing Cooperative', "Spacious worker-owned microbrewery with picnic tables & a projector screen in an industrial taproom.", "3pm - 8pm", "10615 Metric Blvd, Austin, TX 78758"),
  createData('Country Boyz Fixins LLC', 'Best Southern food in Austin', "11am - 5pm", '4140 E 12th St, Austin, TX 78721'),
  createData('Hillside Farmacy', "Antique-chic eatery in a historic building for thoughtfully sourced eclectic fare, plus groceries.", '3pm - 9pm', '1209 E 11th St, Austin, TX 78702'),
  createData('Sway', "Modern contemporary Thai cusine", '4pm - 9pm', '3437 Bee Cave Rd, West Lake Hills, TX 78746'),
];

const Listings = () => {
  const classes = useStyles();

  return (
<div>
    <br />
    <br />
    <br />
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.hours}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">
                  <DeleteIcon color="secondary" />
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <LogoutButton />
    <br />
    <AddFooter />
    </div>
  );
}


export default Listings