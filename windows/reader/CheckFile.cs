using System;
using System.IO;
using Microsoft.ReactNative.Managed;
using System.Threading.Tasks;

namespace reader
{
  [ReactModule]
  class CheckFile
  {
    [ReactMethod("doesFileExists")]
    public async Task<bool> doesFileExists(string filename)
    {
      return File.Exists(filename);
    }
  }
}