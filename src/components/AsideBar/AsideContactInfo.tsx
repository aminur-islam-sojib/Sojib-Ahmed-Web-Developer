import { Mail, PhoneCall, CalendarFold, LocationEditIcon } from 'lucide-react';
import SocialMedia from './SocialMedia';

interface userDataType {
  id: number;
  title: string;
  value: string;
  icon: 'Mail' | 'PhoneCall' | 'CalendarFold' | 'LocationEditIcon';
}

const userData: userDataType[] = [
  {
    id: 1,
    title: 'EMAIL',
    value: 'sojibahmed.connect@gmail.com',
    icon: 'Mail',
  },
  {
    id: 2,
    title: 'PHONE',
    value: '+8801757829428',
    icon: 'PhoneCall',
  },
  {
    id: 3,
    title: 'BIRTHDAY',
    value: 'Feb 20, 2006',
    icon: 'CalendarFold',
  },

  {
    id: 4,
    title: 'LOCATION',
    value: 'Dhaka, Bangladesh',
    icon: 'LocationEditIcon',
  },
];

const AsideContactInfo = () => {
  const icons = { Mail, PhoneCall, CalendarFold, LocationEditIcon };

  const handleRedirectLink = (title: string, value: string) => {
    if (title === 'email') {
      console.log(value);
      window.open(`mailto:${value}`, '_self');
    } else if (title === 'phone') {
      window.location.href = `tel:${value}`;
    }
  };

  return (
    <div>
      <div className="mt-5 mb-10 lg:mt-10 lg:block">
        <hr />
      </div>
      <div className="mt-5 grid  gap-5 grid-cols-2 lg:grid-cols-1">
        {userData.map(({ id, title, value, icon }) => {
          const Icon = icons[icon];
          return (
            <div key={id} className=" min-w-0">
              <div className=" flex gap-3">
                <div className="h-12 w-12 bgIcon flex justify-center items-center rounded-xl relative">
                  <Icon color="var(--primary)" />
                </div>
                <div className=" flex-1 overflow-hidden min-w-0">
                  <h1 className=" text-gray-500 text-xs">{title}</h1>
                  <p
                    onClick={() =>
                      handleRedirectLink(
                        title.toLowerCase(),
                        value.toLowerCase()
                      )
                    }
                    className="line-clamp-1 break-words cursor-pointer text-[15px]"
                    title={value}
                  >
                    {value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10 mb-10 lg:mt-10 lg:block">
        <hr />
      </div>
      <SocialMedia />
    </div>
  );
};

export default AsideContactInfo;
