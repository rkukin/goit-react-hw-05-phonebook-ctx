import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";

const ListItem = styled.li`
margin-right: 30px;
min-width: 50%;
`;

const DeleteButton = styled.button`
max-width: 50%;
border-radius: 5px;
`;

const ContactListItemWrapper = styled.div`
display: flex;
margin-bottom: 10px;
`;


export default function ContactListItem({handleDelete, contact: {id, name, number}}) {

  return (
    <ContactListItemWrapper>
      <ListItem key={id}>{name}: {number} </ListItem>
      <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
    </ContactListItemWrapper>
  )
}

ContactListItem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired
};