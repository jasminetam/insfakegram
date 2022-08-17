
export interface postProps {
  id: number;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}
export interface postsProps {
  id: number;
  data(): {
    username: string;
    profileImg: string;
    image: string;
    caption: string;
  };
}

export interface commentProps {
  id: string;
  data(): {
    username: string;
    comment: string;
    userImage: string;
    timestamp: any
  };
}

