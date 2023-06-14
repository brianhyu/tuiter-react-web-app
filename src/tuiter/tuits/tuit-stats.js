import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../services/tuits-thunks";

const TuitStats = ({ tuit }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateTuitThunk())
    }, [dispatch])


    return (
        <div className="row mt-2">

            <div className="col">
                <i className="bi bi-chat-square me-2"></i>
                {tuit.replies}
            </div>

            <div className="col">
                <i className="bi bi-arrow-repeat me-2"></i>
                {tuit.retuits}
            </div>

            <div className="col" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes : tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
                        liked : !tuit.liked
                    })
                )}>
                {tuit.liked &&
                    <i className="bi bi-heart-fill me-2" style={{ color: tuit.liked ? 'red' : "white" }}></i>
                }
                {!tuit.liked &&
                    <i className="bi bi-heart me-2"></i>
                }
                {tuit.likes}
            </div>

            <div className="col" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        dislikes : tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
                        disliked : !tuit.disliked
                    })
                )}>
                {tuit.disliked &&
                    <i className="bi bi-hand-thumbs-down-fill me-2" style={{ color: tuit.disliked ? 'gray' : "white" }}></i>
                }
                {!tuit.disliked &&
                    <i className="bi bi-hand-thumbs-down me-2"></i>
                }
                {tuit.dislikes}
            </div>


            <div className="col">
                <i className="bi bi-box-arrow-up-right me-2"></i>
            </div>

        </div>
    )
}

export default TuitStats;