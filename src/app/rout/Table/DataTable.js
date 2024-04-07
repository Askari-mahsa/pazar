import React, { useEffect, useState } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Grid from "@material-ui/core/Grid"
import { TableOperations } from "../TableOperations/Operations";
import axios from 'axios';
export const DataTable = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setComments(response.data);
      } catch (error) {
        console.error('دیتا یافت نشد:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <Grid style={{padding:"20px"}}>
      <TableOperations/>
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Body</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {comments.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.body}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Grid>
    
  );
};
