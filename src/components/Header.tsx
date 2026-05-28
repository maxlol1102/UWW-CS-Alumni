export function Header() {
  return (
    <header className="bg-uww-purple text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
        {/*
          Replace this placeholder with the actual UWW logo:
          <img src="/uww-logo.png" alt="University of Wisconsin–Whitewater" className="h-10 w-auto" />
          Get the logo from: https://www.uww.edu/communications/brand/logo-downloads
        */}
        <div
          aria-label="University of Wisconsin–Whitewater"
          className="flex-shrink-0 bg-uww-gold text-uww-purple font-black text-sm px-2 py-1 rounded leading-tight text-center"
        >
          <div>UW</div>
          <div>W</div>
        </div>

        <div>
          <h1 className="text-lg sm:text-xl font-bold leading-tight">
            CS Alumni Network
          </h1>
          <p className="text-xs sm:text-sm text-purple-200 leading-tight">
            University of Wisconsin–Whitewater
          </p>
        </div>
      </div>
    </header>
  )
}
