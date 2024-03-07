'use client';

import {DateTime} from 'luxon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Tooltip} from '@components/project/breezy/shared';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import useDashboard from '@hooks/project/breezy/use-dashboard';

const Chat = (): JSX.Element => {
  const {messages} = useDashboard();
  return (
    <>
      {messages.list
        .find((message): boolean => message.sender.id === messages.active)
        ?.chats.map(
          (chat, index): JSX.Element => (
            <div
              className='contents'
              key={chat.id}
            >
              {!DateTime.fromISO(chat.timestamp.created).hasSame(
                DateTime.fromISO(
                  messages.list.find(
                    (message): boolean => message.sender.id === messages.active
                  )?.chats[index - 1]?.timestamp.created ?? ''
                ),
                'day'
              ) && (
                <div className='grid place-content-center py-2'>
                  <div className='w-fit rounded-xl bg-white px-5 py-2 text-gray-500 shadow-md'>
                    {DateTime.utc()
                      .toLocal()
                      .hasSame(
                        DateTime.fromISO(chat.timestamp.created),
                        'day'
                      ) && <>TODAY</>}
                    {DateTime.utc()
                      .toLocal()
                      .minus({days: 1})
                      .hasSame(
                        DateTime.fromISO(chat.timestamp.created),
                        'day'
                      ) && <>YESTERDAY</>}
                    {DateTime.utc()
                      .toLocal()
                      .diff(DateTime.fromISO(chat.timestamp.created), 'days')
                      .days >= 2 &&
                      DateTime.utc()
                        .toLocal()
                        .diff(DateTime.fromISO(chat.timestamp.created), 'days')
                        .days <= 5 && (
                        <>
                          {DateTime.fromISO(chat.timestamp.created)
                            .toLocaleString({weekday: 'long'})
                            .toUpperCase()}
                        </>
                      )}
                    {DateTime.utc()
                      .toLocal()
                      .diff(DateTime.fromISO(chat.timestamp.created), 'days')
                      .days > 5 && (
                      <>
                        {DateTime.fromISO(
                          chat.timestamp.created
                        ).toLocaleString({
                          month: '2-digit',
                          day: '2-digit',
                          year: 'numeric'
                        })}
                      </>
                    )}
                  </div>
                </div>
              )}
              <div
                className={`flex w-fit flex-col ${
                  chat.self
                    ? 'place-items-end place-self-end'
                    : 'place-items-start place-self-start'
                }`}
              >
                <p
                  className={`w-fit max-w-[80vw] px-3 py-2 shadow-md ${
                    chat.self
                      ? 'rounded-l-xl rounded-br-xl bg-white'
                      : 'rounded-r-xl rounded-bl-xl bg-purple-500 text-white'
                  }`}
                  style={{wordBreak: 'break-word'}}
                >
                  {chat.message}
                </p>
                <div
                  className={`mx-1 ${chat.self ? 'text-end' : 'text-start'}`}
                >
                  <div className='space-x-2'>
                    <Tooltip id={`timestamp-${chat.id}`}>
                      <span
                        className='text-sm text-gray-500'
                        data-tooltip-id={`timestamp-${chat.id}`}
                        data-tooltip-content={DateTime.fromISO(
                          chat.timestamp.created
                        ).toLocaleString(DateTime.DATETIME_SHORT)}
                        data-tooltip-place={chat.self ? 'left' : 'right'}
                      >
                        {DateTime.fromISO(
                          chat.timestamp.created
                        ).toLocaleString(DateTime.TIME_SIMPLE)}
                      </span>
                    </Tooltip>
                    {chat.self && (
                      <FontAwesomeIcon
                        className='text-gray-500'
                        icon={faCheck}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
    </>
  );
};

export default Chat;
