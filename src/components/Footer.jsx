import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive"
const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ANJALI.</Logo>
            <Desc>
                There are many variations of text, so we are just placing them randomly for development purposes. So Kindly do not take them seriousy.
            </Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashan</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}}/>
                1-block, v-wing, Hamerian building 2nd floor, New York
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}}/>
                +1 234-55-68
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}}/>
                anjali@nam.dev
            </ContactItem>
            <Payment src="data:image/png;base64,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"/>
        </Right>
    </Container>
  )
}

export default Footer