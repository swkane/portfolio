import styled from "styled-components";

export const Header = styled.div`
  background-color: #77b1ed;
  color: white;
  text-align: right;
`;

export const HeaderItem = styled.a`
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 0.75rem;
  color: white;
  display: inline-block;
`;

export const BodyContainer = styled.div`
  margin: 60px auto;
`;

export const ProfileImage = styled.img`
  margin: 50px;
  border-radius: 100%;
  width: 230px;
`;

export const Greeting = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
`;

export const ConnectionList = styled.ul`
  margin-top: 80px;
  padding-left: 0;
`;

export const ConnectionItem = styled.li`
  display: inline;
`;

export const ConnectionIcon = styled.img`
  width: 40px;
  margin-right: 40px;
`;
