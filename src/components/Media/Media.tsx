import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Container, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: 20,
    },

    textHeader: {
        fontFamily: "sans-serif",
        fontSize: 30,
    },
    link: {
        paddingTop: 10,
        '&:hover': {
            color: "green",
            fontWeight: 'bold'
        }
    }
}));

const data = [
    {
      "position": 0,
      "title": "Nhipcaudautu: XTayPro: Kiếm tiền từ những chiếc vali trống",
      "imageUrl":
          "https://blog.xtaypro.com/wp-content/uploads/2018/12/K-Startup-1024x427.png",
      "link": "https://nhipcaudautu.vn/startup/xtaypro-kiem-tien-tu-nhung-chiec-vali-trong-3327484/"
    },
    {
      "position": 1,
      "title": "Vnexpress: Startup làm ứng dụng mua giùm, xách hộ cho người du lịch",
      "imageUrl":
          "https://movies6-dev.s3-ap-southeast-1.amazonaws.com/banner02.jpg",
      "link": "https://vnexpress.net/kinh-doanh/startup-lam-ung-dung-mua-gium-xach-ho-cho-nguoi-du-lich-3743213.html"
    },
    {
      "position": 2,
      "title": "Haiquanonline: Kinh tế chia sẻ: Một mô hình tiện ích mới",
      "imageUrl":
          "https://lh3.googleusercontent.com/cH089QF7TPpapeGQLGgP4DNO4fQMIEnapmOE_g3gx_EMhVjbgdLRedHObCzezjWfvw",
      "link": "https://haiquanonline.com.vn/kinh-te-chia-se-mot-mo-hinh-tien-ich-moi-118824.html"
    },
    {
      "position": 3,
      "title": "Thesaigontimes: Startup công nghệ “lớn lên” cùng TMĐT xuyên biên giới",
      "imageUrl": "https://i.hungrygowhere.com/cms/c0/f7/79/2b/172741/may.jpg",
      "link": "https://www.thesaigontimes.vn/285602/startup-cong-nghe-lon-len-cung-tmdt-xuyen-bien-gioi-.html"
    },
    {
      "position": 4,
      "title": "Haiquanonline: Thương mại điện tử xuyên biên giới: Xu hướng tất yếu của thời đại số",
      "imageUrl": "https://slick.sg/img/hero-1.jpg",
      "link": "https://haiquanonline.com.vn/thuong-mai-dien-tu-xuyen-bien-gioi-xu-huong-tat-yeu-cua-thoi-dai-so-111859-111859.html"
    },
    {
        "position": 5,
        "title": "Zdnet: 베트남 스타트업 'K스타트업'서 첫 3위 화제",
        "imageUrl": "https://slick.sg/img/hero-1.jpg",
        "link": "https://www.zdnet.co.kr/view/?no=20181206145151"
      },
      {
        "position": 6,
        "title": "Dangcongsan: Tự hào về Startup Việt Nam",
        "imageUrl": "https://slick.sg/img/hero-1.jpg",
        "link": "http://dangcongsan.vn/khoa-giao/tu-hao-ve-startup-viet-nam-dau-tien-doat-giai-cao-trong-cuoc-thi-lon-cua-the-gioi-508036.html"
      },
      {
        "position": 7,
        "title": "Netnews: Tạo ra app 'buôn' hàng xách tay...",
        "imageUrl": "https://slick.sg/img/hero-1.jpg",
        "link": "http://netnews.vn/Tao-ra-app-buon-hang-xach-tay-nho-muon-vali-trong-cua-nguoi-di-du-lich-startup-nay-dat-muc-tieu-co-10-trieu-nguoi-dung-trong-nuoc-va-300-trieu-nguoi-quoc-te-kinh-doanh-6-0-2108980.html"
      }
      ,
      {
        "position": 8,
        "title": "Baodatviet: Khởi nghiệp với ứng dụng kinh doanh 'xách tay'",
        "imageUrl": "https://slick.sg/img/hero-1.jpg",
        "link": "http://gioitre.baodatviet.vn/Khoi-nghiep-voi-ung-dung-kinh-doanh-xach-tay-startup-Viet-nhan-giai-thuong-lon-tai-thung-lung-Silicon-Han-Quoc-1401087.html"
      },
      {
        "position": 9,
        "title": "XtayPro on HTV - Startup Việt đầu tiên đạt giải cao trên đấu trường quốc tế",
        "imageUrl": "https://slick.sg/img/hero-1.jpg",
        "link": "https://www.youtube.com/watch?v=-IDOhS2nkQ0"
      },
      {
        "position": 10,
        "title": "Tinh Tề review - XTayPro: nơi gặp nhau của người mua hàng và ship hàng từ nước ngoài",
        "imageUrl": "https://slick.sg/img/hero-1.jpg",
        "link": "https://www.youtube.com/watch?v=mIHyzZ--Gtw"
      },
      {
        "position": 10,
        "title": "Ứng dụng XTayPro giành giải ở đấu trường startup tại Hàn Quốc",
        "imageUrl": "https://slick.sg/img/hero-1.jpg",
        "link": "https://thanhnien.vn/cong-nghe/ung-dung-xtaypro-gianh-giai-o-dau-truong-startup-tai-han-quoc-1030695.html"
      },
      {
        "position": 10,
        "title": "Vietnam’s peer-to-peer shopping and delivery platform gets South Korea license",
        "imageUrl": "https://slick.sg/img/hero-1.jpg",
        "link": "https://e.vnexpress.net/news/business/companies/vietnam-s-peer-to-peer-shopping-and-delivery-platform-gets-south-korea-license-3845828.html"
      }
  ];

const Media = () => {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Typography className={classes.textHeader}>MEDIA</Typography>
            {
                data.map(x => {
                    return <div className={classes.link}>
                        <a href={x.link} target="_blank">{x.title}</a>
                    </div>
                })
            }
        </Container>
    )
}

export default Media;