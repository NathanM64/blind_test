import styled from 'styled-components';
var min_size = '5px';
var med_size = '15px';
var max_size = '25px';

export const LayoutRoot = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const LayoutForm = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 250px;
  justify-content: space-evenly;
`;

export const Title = styled.h1`

`;

export const Text = styled.p`

`;

export const Button = styled.button`
  border-radius: ${min_size};
  border: 1px solid light-grey;
	padding: 4px ${min_size};
	cursor:pointer;
	text-decoration: none;
  color: middle-grey;
  background: white;
  margin: 0;

`;

export const Input = styled.input`
  border-radius: 20px;
  height: ${max_size};
	padding: 4px ${min_size};
  outline: none;
`;