import React from 'react'

export default async function Page({
  params,
}: {
  params: { storeUrl: string }
}) {
  const { storeUrl } = await params
  return (
    <div className="flex h-full w-full">
      App Page
      <br />
      {storeUrl}
    </div>
  )
}
