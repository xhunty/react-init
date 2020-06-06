import { connect } from "react-redux";
import Profile from "./Profile";
import { RootReducer } from "../../redux/redux-store";
import { updateNewPostTextActionCreator, addNewPostActionCreator } from "../../redux/actions";
const mapStateToProps = (state:RootReducer) => ({
    Posts:state.profileReducer.Posts,
    NewPostText:state.profileReducer.NewPostText
})
const mapDispatchToProps = () => ({
    UpdateText:(text:string) => updateNewPostTextActionCreator(text),
    PublishPost:() => addNewPostActionCreator()
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile)