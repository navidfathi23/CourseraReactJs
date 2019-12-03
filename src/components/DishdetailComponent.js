import React , {Component} from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
    
    constructor(props){
        super(props);
        this.state={
        };
    }

    setLongDate(date){
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ];
        
          const day = date.getDate();
          const monthIndex = date.getMonth();
          const year = date.getFullYear();
        
          return  monthNames[monthIndex] + ' ' + day + ' , ' + year;
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    

    renderComments(dish){
        if (dish != null){
            const comment=this.props.dish.comments.map((cm=>{
                return(
                    <ul key={cm.id} className="list-unstyled">
                        <li><p>{cm.comment}</p></li>
                        <li><p>--{cm.author} , {this.setLongDate(new Date(cm.date))}</p></li>
                    </ul>
                );
            }));
            return(
                <div className="row col-12 col-md-5 m-1">
                    
                    <Media>
                        <Media body>
                            <Media heading>Comment</Media>
                            {comment}
                        </Media>
                    </Media>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
    }

    render(){
        return(
            <div className="row">
              <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
              </div>
                {this.renderComments(this.props.dish)}
            </div>
        );
    }

}

export default DishDetail;