
import { Card, CardContent } from "../ui/card"
import { Avatar as Avatar1 } from "../ui/avatar"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"
import { useAuthContext } from "../../hooks/useAuthContext";
import Avatar from "react-avatar";
import { color } from "../../lib/utils";
import AuthLoder from "../auth/AuthLoder";
import usefetchProfile from "../../hooks/usefetchProfile";
import ProfileLoder from "./ProfileLoder";
import Postloder from "./Postloder"


export function FeedPost() {
  const { state } = useAuthContext();
  const userId = state.user?.id || 'id';
  const { imageUrl, loading, error } = usefetchProfile(userId);

  if (error) {
    return <AuthLoder />;
  }
  // if (loading) {
  //   return <ProfileLoder />
  // }

  return (

    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md rounded-xl">
        <CardContent className="p-4 md:p-6">
          <form className="grid gap-4">
            <div className="flex items-center gap-4">

              {loading ? <Postloder /> : <>
                {imageUrl ? (
                  <img
                    className="h-24 w-24 rounded-full mx-auto"
                    src={imageUrl}
                    alt="Randy Robertson"
                  />
                ) : (
                  <Avatar1 className="h-12 w-12 shrink-0 rounded-full">
                    {/* <AvatarImage src="/placeholder-user.jpg" />
                                  <AvatarFallback>CN</AvatarFallback> */}
                    <Avatar size="50" color={color} name={state.user?.name} round={true} />
                  </Avatar1>
                )}
              </>}



              <Input placeholder="What's on your mind?" className="flex-1" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <ImageIcon className="h-5 w-5" />
                  <span className="sr-only">Upload image</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <VideoIcon className="h-5 w-5" />
                  <span className="sr-only">Upload video</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <SmileIcon className="h-5 w-5" />
                  <span className="sr-only">Add emoji</span>
                </Button>
              </div>
              <Button variant="blue" type="submit">Post</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

function ImageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function SmileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function VideoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}


// function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   )
// }
