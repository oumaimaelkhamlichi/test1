import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comments = ({ comments }) => {
    console.log(comments)
    const styles = {
        container: {
            position: 'relative',
            width: '100%',
            margin: '20px auto',
            maxWidth: '1190px',
            overflow: 'hidden',
            borderRadius: '15px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        imageContainer: {
            position: 'relative',
            width: '100%',
            height: '450px',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        overlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Changer la couleur en sombre
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        commentsContainer: {
            width: '80%',
            maxWidth: '600px',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
            color: 'white',
        },
        comment: {
            margin: '10px 0',
            fontSize: '20px',
            fontStyle: 'italic',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        icon: {
            marginRight: '10px',
            fontSize: '80px',
        }
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img src="image/pexel2.jpg" alt="Customer" style={styles.image} />
            </div>
            <div style={styles.overlay}>
                <div style={styles.commentsContainer}>
                    <Slider {...sliderSettings}>
                        {comments.map((comment) => (
                            <div key={comment.id}>
                               
                                <p style={styles.comment}>
                                    {comment.texte}
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Comments;

