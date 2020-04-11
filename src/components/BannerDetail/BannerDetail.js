import React,{Component} from 'react';
import UcNav from "../uc-nav/UcNav";
import styles from './BannerDetail.module.css'
export default class BannerDetail extends Component{
  render(){
    let {title,author,banner} = this.props.data;
    return (
        <div className={styles.bannerDetail}>
            <UcNav/>
            <img src={`${this.baseUrl}/${banner}`} style={{}}></img>
        </div>
    )
  }
}