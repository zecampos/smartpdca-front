import React, { useState, useEffect } from 'react';

import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {
  TextField,
  Paper,
  Grid,
  InputBase,
  Divider,
  IconButton,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
} from '@material-ui/core';
import { uniqueId } from 'lodash';
import filesize from 'filesize';
import DeleteIcon from '@material-ui/icons/Delete';
import ImageIcon from '@material-ui/icons/Image';
import SearchIcon from '@material-ui/icons/FileCopy';
import Icon from '@material-ui/core/Icon';
import TheUploader from '../TheUploader';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    width: '100%',
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    minHeight: 200,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  list: {
    width: '100%',
    minHeight: 200,
    backgroundColor: theme.palette.background.paper,
    marginBottom: 10,
  },
  root3: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%',
    minHeight: 200,
    marginTop: 20,
    marginBottom: 20,
  },
}));

export default function Step7({ links, setLinks, uploads, setUploads }) {
  const classes = useStyles();
  const [link, setLink] = useState('');

  function onUpload(files) {
    const filesUploaded = files.map(file => ({
      file,
      id: Math.random(),
      size: filesize(file.size),
    }));

    setUploads(uploads.concat(filesUploaded));
    console.log(uploads);
  }
  function addLink() {
    setLinks([...links, { key: Math.random(), label: link }]);
    setLink('');
  }
  const handleDelete = chipToDelete => () => {
    setLinks(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };
  const handleDeleteFile = currentFile => () => {
    setUploads(files => files.filter(file => file.id !== currentFile.id));
  };
  const files = uploads.map(file => {
    if (!file) return null;

    return (
      <ListItem key={file.id}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={file.path} secondary={`${file.size}- bytes`} />
        <ListItemSecondaryAction>
          <IconButton
            onClick={handleDeleteFile(file)}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
  return (
    <Grid
      alignContent="center"
      justify="center"
      style={{ maxWidth: '100%' }}
      container
    >
      <Grid item xs={8}>
        <TheUploader onUpload={onUpload} />
        {/* <Paper
          style={{
            display: 'flex',
            flexDirection: ' column',
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            alignmentBaseline: 'central',
            height: 200,
          }}
          variant="outlined"
          square
          {...getRootProps({ className: 'dropzone' })}
        >
          <input {...getInputProps()} />

          <Icon
            style={{ color: green[500], fontSize: 40, alignSelf: 'center' }}
          >
            file_copy
          </Icon>

          <p style={{ textAlign: 'center' }}>
            Clique aqui ou arraste os arquivos!
          </p>
        </Paper> */}
      </Grid>
      <Grid item xs={8}>
        <div style={{ alignContent: 'center', justifyContent: 'center' }}>
          <List className={classes.list}>{files}</List>
        </div>
      </Grid>
      <Grid item xs={8}>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Digite o link"
            inputProps={{ 'aria-label': 'search google maps' }}
            value={link}
            onChange={value => setLink(value.target.value)}
          />
          <IconButton
            onClick={() => addLink()}
            className={classes.iconButton}
            aria-label="search"
          >
            <Icon>
              <Icon style={{ color: green[500] }}>add_circle</Icon>
            </Icon>
          </IconButton>
        </Paper>
        <Paper component="form" className={classes.root2}>
          {links.map(data => (
            <Chip
              key={data.key}
              label={data.label}
              onDelete={handleDelete(data)}
              className={classes.chip}
            />
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}
