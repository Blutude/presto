import React from 'react';
import PropTypes from 'prop-types';
import buffet from '../../resources/images/bar-buffet.jpg';
import turkishFood from '../../resources/images/turkish-food.jpg'
import { purple_main } from '../../resources/colors';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from 'reactstrap';
import Ratings from 'react-ratings-declarative';

const RestaurantCard = props => {
    const styles = {
        container:{

        },
        text: {
            marginLeft: 5,
        },
        img: {
            borderRadius: 3,
            width: '100%',
            height: 'auto'
        },
        infoBlock: {
            paddingTop: 7,
            paddingBottom: 7
        }
    };

    return (
        <div style={props.style}>
            <Card>
                <CardImg width = "100%" src={turkishFood} />
                <CardBody>
                    <CardTitle>
                        KRAL Doner
                    </CardTitle>
                    <CardSubtitle>
                        Susurluk, Balikesir
                    </CardSubtitle>
                    <Ratings rating={4.5}>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>


                    </Ratings>

                    <CardText>
                        Types of food
                    </CardText>

                </CardBody>

            </Card>
        </div>



        // <div style={styles.container} class = "container-fluid" className="card">
        //     <img style={styles.img} src={buffet} />
        //     <h3 style={{ ...styles.text, color: purple_main, fontWeight: 60 }}>{props.restaurantName}</h3>
        //     <div style={styles.infoBlock}>
        //         <p className="card-info" style={styles.text}>{props.address}, {props.postalCode}</p>
        //         <p className="card-info" style={styles.text}>{props.phoneNumber}</p>
        //         <p className="card-info" style={styles.text}>{props.email}</p>
        //     </div>
        // </div>
    )
};

RestaurantCard.propTypes = {
    restaurantName: PropTypes.string,
    address: PropTypes.string,
    postalCode: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    style: PropTypes.object
};

RestaurantCard.defaultProps = {
    restaurantName: 'Restaurant Name',
    address: '377 Address Street',
    phoneNumber: '514-452 2345',
    postalCode: 'H3K4L1',
    email: 'example@example.com',
    style: {}
};

export default RestaurantCard;