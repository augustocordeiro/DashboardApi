﻿using System.Linq;
using Microsoft.AspNetCore.Http;

namespace DashboardApi.Util
{
    public static class HttpRequestExtension
    {
        public static string GetHeader(this HttpRequest request, string key)
        {
            return request.Headers.FirstOrDefault(x => x.Key == key)
                          .Value.FirstOrDefault();
        }
    }
}