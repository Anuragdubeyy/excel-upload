// import React from 'react';
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from '../ui/alert-dialog';

// interface Props {
//   title: React.ReactNode;
//   description?: React.ReactNode;
//   cancelButtonText?: string;
//   confirmButtonText?: string;
//   onConfirm: () => void;
//   children: React.ReactNode;
// }

// export default function AlertConfirmation({
//   title,
//   description,
//   cancelButtonText = 'Cancel',
//   confirmButtonText = 'Confirm',
//   onConfirm,
//   children,
// }: Props) {
//   return (
//     <AlertDialog>
//       <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>{title}</AlertDialogTitle>
//           <AlertDialogDescription>{description}</AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>{cancelButtonText}</AlertDialogCancel>
//           <AlertDialogAction
//             className="bg-destructive hover:bg-destructive/90"
//             onClick={onConfirm}
//           >
//             {confirmButtonText}
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }

import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../shared/ui/alert-dialog';

interface Props {
  title: React.ReactNode;
  description?: React.ReactNode;
  cancelButtonText?: string;
  confirmButtonText?: string;
  onConfirm?: () => void;
  children: React.ReactNode;
  isInDevelopment?: boolean;
}

export default function AlertConfirmation({
  title,
  description,
  cancelButtonText = 'Cancel',
  confirmButtonText = 'Confirm',
  onConfirm,
  children,
  isInDevelopment = false,
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          {!isInDevelopment ? (
            <>
              <AlertDialogCancel>{cancelButtonText}</AlertDialogCancel>
              <AlertDialogAction
                className="bg-destructive hover:bg-destructive/90"
                onClick={onConfirm}
              >
                {confirmButtonText}
              </AlertDialogAction>
            </>
          ) : (
            <AlertDialogCancel>Ok</AlertDialogCancel>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
