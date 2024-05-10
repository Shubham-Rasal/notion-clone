"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iKtTYxLuFau
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useState } from "react";
import { getAnswer } from "./actions";

export default function ChatPage() {
  const [generation, setGeneration] = useState<string>("");

  return (
    <a href="/blog/what-ive-learned-2/">
      <article className=" relative m-2 h-140 overflow-hidden rounded-md border border-slate-200 bg-white p-4 transition-all hover:border-slate-300 hover:drop-shadow-sm ">
        <h3 className="text-base font-medium tracking-normal text-slate-800">
          #2 What I've learned
        </h3>
        <div className="leading-4">
          <div className="first:ml-0 ml-2 inline-flex font-semibold leading-sm h-1 w-5 uppercase rounded-full align-middle bg-indigo-500 text-white border-transparent"></div>
        </div>
        <small className="mt-1 text-sm text-slate-500">February 7, 2024</small>
        <p className="excerpt mt-1 text-sm text-slate-800">
          At my job, every engineer does customer support. You might think it’s
          a ...
        </p>
        <div className=" absolute bottom-0 left-0 right-0 h-10 rounded-b bg-white "></div>
      </article>
    </a>
  );
}

function Component() {
  return (
    <div className="grid grid-cols-3 gap-8 p-6 bg-[#f7f8fa]">
      <div className="col-span-1 space-y-6">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage
                alt="Stephanie Waldeck"
                src="/placeholder.svg?height=40&width=40"
              />
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">Stephanie Waldeck</h3>
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <UploadIcon className="h-4 w-4" />
                <span>Upd. Feb 5, 2024 5:34 PM</span>
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <MailOpenIcon className="h-5 w-5 text-gray-500" />
              <span className="ml-2 text-sm">windustries@gmail.com</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-gray-500" />
              <span className="ml-2 text-sm">(307) 963-4754</span>
            </div>
            <div className="flex items-center">
              <CreditCardIcon className="h-5 w-5 text-gray-500" />
              <span className="ml-2 text-sm">684-11-0032</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-lg font-semibold">Applications</h4>
          <div className="space-y-4">
            <div className="flex items-center px-4 py-2 bg-white rounded-md shadow">
              <Badge variant="secondary">Rejected</Badge>
              <div className="flex flex-col ml-4">
                <span className="text-sm font-medium text-gray-800">
                  Mortgage
                </span>
                <span className="text-xs text-gray-500">
                  #6823654 • Jan 4, 2024
                </span>
              </div>
              <span className="ml-auto text-lg font-semibold text-gray-900">
                $32,000
              </span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white rounded-md shadow">
              <ShieldCheckIcon className="h-5 w-5 text-green-500" />
              <div className="flex flex-col ml-4">
                <span className="text-sm font-medium text-gray-800">
                  Personal Loan
                </span>
                <span className="text-xs text-gray-500">
                  #6823654 • Jan 4, 2024
                </span>
              </div>
              <span className="ml-auto text-lg font-semibold text-gray-900">
                $6,500
              </span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white rounded-md shadow">
              <Badge variant="default">Final Review</Badge>
              <div className="flex flex-col ml-4">
                <span className="text-sm font-medium text-gray-800">
                  Mortgage
                </span>
                <span className="text-xs text-gray-500">
                  #6823654 • Jan 4, 2024
                </span>
              </div>
              <span className="ml-auto text-lg font-semibold text-gray-900">
                $28,000
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-white rounded-md shadow p-6 space-y-6">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-semibold text-gray-800">
            Personal Loan
          </h2>
          <div>
            <Button variant="outline">Change Status</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <UploadIcon className="h-4 w-4" />
            <span>Upd. Feb 5, 2024 5:34 PM</span>
            <Badge className="ml-2" variant="secondary">
              High Priority
            </Badge>
            <Badge className="ml-2" variant="default">
              Phone Lead
            </Badge>
          </div>
          <div className="flex items-center justify-end">
            <span className="font-semibold text-gray-800">68-22-003</span>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              <span>Borrower Stephanie Waldeck / windustries@gmail.com</span>
              <span className="mx-2">•</span>
              <span>Co-borrower Lee Devonsher / devonsheer@gmail.com</span>
            </div>
            <div className="flex items-center divide-x divide-gray-300">
              <span className="pr-4 text-gray-800 cursor-pointer">
                Documents
              </span>
              <span className="px-4 text-gray-800 cursor-pointer">Emails</span>
              <span className="px-4 text-gray-800 cursor-pointer">Tasks</span>
              <span className="px-4 text-gray-800 cursor-pointer">Notes</span>
              <span className="px-4 text-gray-800 cursor-pointer">
                Decisions
              </span>
              <span className="px-4 text-gray-800 cursor-pointer">
                Status Rules
              </span>
              <span className="pl-4 text-gray-800 cursor-pointer">History</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">Documents</h3>
            <div className="flex space-x-2">
              <Input placeholder="Search by Document Name" />
              <Button variant="secondary">Upload New</Button>
            </div>
          </div>
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[45%] text-left">NAME</TableHead>
                  <TableHead className="w-[15%] text-left">TYPE</TableHead>
                  <TableHead className="w-[15%] text-left">SIZE</TableHead>
                  <TableHead className="w-[10%] text-left">UPDATED</TableHead>
                  <TableHead className="w-[10%] text-left" />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Bank Statement_2024
                  </TableCell>
                  <TableCell>xls</TableCell>
                  <TableCell>0,1 MB</TableCell>
                  <TableCell>Feb 6, 2024</TableCell>
                  <TableCell>
                    <Button variant="ghost">View</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Proof of Address_Bank Statement
                  </TableCell>
                  <TableCell>docx</TableCell>
                  <TableCell>0,3 MB</TableCell>
                  <TableCell>Feb 6, 2024</TableCell>
                  <TableCell>
                    <Button variant="ghost">View</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Proof of Identity_Driver's License
                  </TableCell>
                  <TableCell>png</TableCell>
                  <TableCell>0,7 MB</TableCell>
                  <TableCell>Feb 5, 2024</TableCell>
                  <TableCell>
                    <Button variant="ghost">View</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Income Verification
                  </TableCell>
                  <TableCell>ppt</TableCell>
                  <TableCell>3,2 MB</TableCell>
                  <TableCell>Feb 1, 2024</TableCell>
                  <TableCell>
                    <Button variant="ghost">View</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Credit Report_2023/2024
                  </TableCell>
                  <TableCell>ppt</TableCell>
                  <TableCell>2,8 MB</TableCell>
                  <TableCell>Jan 23, 2024</TableCell>
                  <TableCell>
                    <Button variant="ghost">View</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Loan Disbursement Instructions
                  </TableCell>
                  <TableCell>pdf</TableCell>
                  <TableCell>11,4 MB</TableCell>
                  <TableCell>Feb 6, 2024</TableCell>
                  <TableCell>
                    <Button variant="ghost">View</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Collateral Agreement
                  </TableCell>
                  <TableCell>pdf</TableCell>
                  <TableCell>11,4 MB</TableCell>
                  <TableCell>Feb 6, 2024</TableCell>
                  <TableCell>
                    <Button variant="ghost">View</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function MailOpenIcon(props) {
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
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ShieldCheckIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
