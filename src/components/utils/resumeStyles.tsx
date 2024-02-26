import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/joy/styles';
import SpeedDial from '@mui/material/SpeedDial';
import { styled as materialStyled } from '@mui/material/styles';

export const StyledTextarea = styled(TextareaAutosize)({
    resize: 'none',
    border: 'none', // remove the native textarea border
    minWidth: 0, // remove the native textarea width
    outline: 0, // remove the native textarea outline
    padding: 0, // remove the native textarea padding
    paddingBlockStart: '1em',
    paddingInlineEnd: `var(--Textarea-paddingInline)`,
    flex: 'auto',
    alignSelf: 'stretch',
    color: 'inherit',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
  
    '&::placeholder': {
      opacity: 0,
      transition: '0.1s ease-out',
    },
    '&:focus::placeholder': {
      opacity: 1,
    },
    // specific to TextareaAutosize, cannot use '&:focus ~ label'
    '&:focus + textarea + label, &:not(:placeholder-shown) + textarea + label': {
      top: '0.5rem',
      fontSize: '0.75rem',
     
    },
    '&:focus + textarea + label': {
      color: 'var(--Textarea-focusedHighlight)',
    
    },
  });
  
  export const StyledLabel = styled('label')(({ theme }) => ({
    position: 'absolute',
    lineHeight: 1,
    top: 'calc((var(--Textarea-minHeight) - 1em) / 2)',
    color: theme.vars.palette.text.tertiary,
    fontWeight: theme.vars.fontWeight.md,
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    
  }));



  export const StyledSpeedDial = materialStyled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
   '.MuiSpeedDial-fab':{
      'background-color':'black',
      '&:hover': {
        'background-color': 'black',
       },
   },
   
   
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
  
      top: theme.spacing(2),
      left: theme.spacing(2),
      
    },
    '.MuiSpeedDialAction-staticTooltipLabel'	:{
      width:'max-content',
      cursor: 'pointer',
      boxShadow: 'inset 0 0 0 0 black',
      background:'white',
      color: 'black',
      transition: 'ease-out 0.4s',
     
    },

   '.MuiSpeedDialAction-fab':{
    'background-color':'black',
    'color':'white',
     '&:hover': {
          'background-color': '#090909cf',
          
         },
 },
  }));