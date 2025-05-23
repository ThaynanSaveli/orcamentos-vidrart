import { Skeleton } from 'primereact/skeleton';

export const LoadingListSkeleton = () => {

  return (
    <div className="card relative shadow-1 border-round-xl px-2 p-3">
      <ul className="m-0 p-0 list-none">
        <li className="mb-4">
            <div className="flex">
                <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li className="mb-4">
            <div className="flex">
                <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li className="mb-4">
            <div className="flex">
                <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li className="mb-4">
            <div className="flex">
                <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li className="mb-4">
            <div className="flex">
                <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li>
            <div className="flex">
                <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
      </ul>
    </div>
  );
};
